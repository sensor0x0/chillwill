/**
 * Chill Will — Page Initialization
 * 
 * if you're here for some reason without knowing us, welcome!
 * a human wrote this text. i vibe coded this page in like 2 hours. i love AI!
 */
(function () {
    'use strict';

    function init() {
        var data = window.CHILL_WILL;
        var ui = window.CHILL_WILL_UI;
        if (!data || !ui) {
            return;
        }

        var page = document.body.dataset.page || 'home';

        var headerEl = document.getElementById('site-header');
        if (headerEl) {
            headerEl.innerHTML = ui.renderHeader(page);
        }

        var footerEl = document.getElementById('site-footer');
        if (footerEl) {
            footerEl.innerHTML = ui.renderFooter();
        }

        if (page === 'home') {
            document.title = data.site.pageTitle;

            var heroTitleEl = document.getElementById('hero-title');
            if (heroTitleEl) {
                heroTitleEl.textContent = data.site.teamName;
            }

            var heroLogoEl = document.getElementById('hero-logo-img');
            if (heroLogoEl) {
                heroLogoEl.src = data.site.logo;
                heroLogoEl.alt = data.site.teamName + ' logo';
            }

            var rosterHeadingEl = document.getElementById('roster-heading');
            if (rosterHeadingEl) {
                rosterHeadingEl.textContent = data.site.rosterHeading;
            }

            var coachHeadingEl = document.getElementById('coach-heading');
            if (coachHeadingEl) {
                coachHeadingEl.textContent = data.site.coachHeading;
            }

            var rosterEl = document.getElementById('roster-grid');
            if (rosterEl) {
                var cards = '';
                for (var i = 0; i < data.players.length; i += 1) {
                    cards += ui.renderRosterCard(data.players[i]);
                }
                rosterEl.innerHTML = cards;
                ui.bindPhotoFallbacks(rosterEl);
                ui.bindFlagFallbacks(rosterEl);
            }

            var coachEl = document.getElementById('coach-container');
            if (coachEl && data.coach) {
                coachEl.innerHTML = ui.renderCoachCard(data.coach);
                ui.bindPhotoFallbacks(coachEl);
                ui.bindFlagFallbacks(coachEl);
            }
        } else if (page === 'player') {
            var profileEl = document.getElementById('player-profile');
            if (profileEl) {
                var params = new URLSearchParams(window.location.search);
                var rawId = params.get('player');
                if (!rawId && window.location.hash) {
                    rawId = window.location.hash.slice(1);
                }

                if (!rawId) {
                    profileEl.innerHTML = ui.renderPlayerProfile(data.allMembers[0], data.allMembers);
                } else {
                    var member = data.getMemberById(rawId);
                    if (member) {
                        profileEl.innerHTML = ui.renderPlayerProfile(member, data.allMembers);
                    } else {
                        profileEl.innerHTML = ui.renderPlayerNotFound(rawId, data.allMembers);
                    }
                }
                ui.bindPhotoFallbacks(profileEl);
                ui.bindFlagFallbacks(profileEl);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

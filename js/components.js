/**
 * Chill Will — Reusable UI Components
 */
(function (global) {
    'use strict';

    function escapeHtml(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getData() {
        return global.CHILL_WILL;
    }

    function getCompactMemberLabel(member) {
        var data = getData();
        if (member && typeof member.name === 'string' && member.name.trim()) {
            return member.name.trim();
        }
        if (member && member.id === 'coach') {
            return data.site.pendingCoachLabel || 'Coach';
        }
        return data.getDisplayName(member);
    }

    function renderLogo(sizeClass, altText) {
        var data = getData();
        var cls = sizeClass ? ' ' + sizeClass : '';
        var alt = escapeHtml(altText || data.site.teamName + ' logo');
        return (
            '<span class="cw-logo' + cls + '">' +
                '<img src="' + escapeHtml(data.site.logo) + '" alt="' + alt + '" class="cw-logo-img">' +
            '</span>'
        );
    }

    function renderFlag(member, options) {
        var data = getData();
        var opts = options || {};
        var showLabel = opts.showLabel !== false;
        var fallbackText = opts.fallbackText !== undefined ? opts.fallbackText : data.site.pendingNationality;
        var size = opts.size === 'md' ? 'md' : 'sm';

        var flagSource = data.getFlagSource(member);
        var flagUrl = data.getFlagUrl(flagSource);
        var label = data.getNationalityLabel(member);
        var codeText = /^[a-z]{2}(-[a-z]{2,3})?$/i.test(flagSource) ? flagSource.toUpperCase() : '--';

        if (flagUrl) {
            var alt = escapeHtml((label || codeText) + ' flag');
            return (
                '<span class="cw-flag-wrap">' +
                    '<img class="cw-flag cw-flag--' + size + '" src="' + escapeHtml(flagUrl) + '" alt="' + alt + '" loading="lazy" decoding="async" data-code="' + escapeHtml(codeText) + '">' +
                    (showLabel && (label || flagSource) ? '<span class="cw-nationality-label">' + escapeHtml(label || codeText) + '</span>' : '') +
                '</span>'
            );
        }

        var pendingLabel = label || fallbackText;
        return (
            '<span class="cw-flag-wrap cw-flag-wrap--pending">' +
                '<span class="cw-flag-placeholder cw-flag--' + size + '" aria-hidden="true"></span>' +
                (showLabel && pendingLabel ? '<span class="cw-nationality-label cw-nationality-label--pending">' + escapeHtml(pendingLabel) + '</span>' : '') +
            '</span>'
        );
    }

    function renderRealName(member, options) {
        var data = getData();
        var opts = options || {};
        var tag = opts.tag === 'p' ? 'p' : 'span';
        var baseClass = opts.baseClass || 'player-real-name';
        var realName = data.getRealName(member);

        if (realName) {
            return '<' + tag + ' class="' + baseClass + '">' + escapeHtml(realName) + '</' + tag + '>';
        }
        if (data.site.pendingRealName) {
            return '<' + tag + ' class="' + baseClass + ' ' + baseClass + '--pending">' + escapeHtml(data.site.pendingRealName) + '</' + tag + '>';
        }
        return '';
    }

    function renderNumber(member) {
        var data = getData();
        var num = member && typeof member.number === 'string' ? member.number.trim() : '';
        if (num) {
            return '<span class="player-number">' + escapeHtml(num) + '</span>';
        }
        if (data.site.pendingNumber) {
            return '<span class="player-number player-number--pending">' + escapeHtml(data.site.pendingNumber) + '</span>';
        }
        return '';
    }

    function renderDescription(member) {
        var data = getData();
        var raw = member && typeof member.description === 'string' ? member.description.trim() : '';
        if (raw) {
            var blocks = raw.split(/\r?\n\s*\r?\n/);
            var paragraphs = '';
            for (var i = 0; i < blocks.length; i += 1) {
                var text = blocks[i].trim();
                if (text) {
                    paragraphs += '<p>' + escapeHtml(text).replace(/\r?\n/g, '<br>') + '</p>';
                }
            }
            if (paragraphs) {
                return '<div class="profile-description">' + paragraphs + '</div>';
            }
        }

        if (data.site.pendingDescription) {
            return '<div class="profile-description profile-description--pending"><p>' + escapeHtml(data.site.pendingDescription) + '</p></div>';
        }
        return '';
    }

    function renderMemberPhoto(member, altText, eager) {
        var data = getData();
        var photo = data.getPhoto(member);
        var pos = escapeHtml((member && member.imagePosition) || '50% 20%');
        var loadingAttr = eager ? '' : ' loading="lazy"';
        var match = /^(.*)\.([a-z0-9]+)$/i.exec(photo);
        var baseAttr = match ? ' data-photo-base="' + escapeHtml(match[1]) + '" data-photo-ext="' + escapeHtml(match[2].toLowerCase()) + '"' : '';

        return (
            '<img class="member-photo" src="' + escapeHtml(photo) + '" alt="' + escapeHtml(altText) + '" style="object-position: ' + pos + ';"' + loadingAttr + ' decoding="async"' + baseAttr + '>'
        );
    }

    function bindPhotoFallbacks(root) {
        var scope = root || document;
        var photos = scope.querySelectorAll('img.member-photo[data-photo-base]');
        var extensions = ['png', 'webp', 'jpg', 'jpeg'];

        for (var i = 0; i < photos.length; i += 1) {
            (function (img) {
                if (img.dataset.photoBound) {
                    return;
                }
                img.dataset.photoBound = '1';

                var base = img.getAttribute('data-photo-base');
                var currentExt = (img.getAttribute('data-photo-ext') || '').toLowerCase();
                var candidates = [];
                for (var j = 0; j < extensions.length; j += 1) {
                    if (extensions[j] !== currentExt) {
                        candidates.push(extensions[j]);
                    }
                }
                var attempt = 0;

                img.addEventListener('error', function () {
                    if (attempt < candidates.length) {
                        img.src = base + '.' + candidates[attempt];
                        attempt += 1;
                    }
                });
            })(photos[i]);
        }
    }

    function bindFlagFallbacks(root) {
        var scope = root || document;
        var flags = scope.querySelectorAll('img.cw-flag[data-code]');
        for (var i = 0; i < flags.length; i += 1) {
            (function (img) {
                if (img.dataset.bound) {
                    return;
                }
                img.dataset.bound = '1';
                img.addEventListener('error', function () {
                    var badge = document.createElement('span');
                    badge.className = 'cw-flag-code';
                    badge.textContent = img.getAttribute('data-code') || '--';
                    if (img.parentNode) {
                        img.parentNode.replaceChild(badge, img);
                    }
                });
            })(flags[i]);
        }
    }

    function renderHeader(activePage) {
        var data = getData();
        var isHome = activePage === 'home';
        var isPlayer = activePage === 'player';

        return (
            '<div class="container header-inner">' +
                '<a href="./index.html" class="brand-link" aria-label="' + escapeHtml(data.site.headerTitle) + '">' +
                    renderLogo('cw-logo--nav', data.site.headerTitle + ' logo') +
                    '<span class="brand-name">' + escapeHtml(data.site.headerTitle) + '</span>' +
                '</a>' +
                '<nav class="site-nav" aria-label="Primary">' +
                    '<a href="./index.html" class="nav-link' + (isHome ? ' is-active' : '') + '"' + (isHome ? ' aria-current="page"' : '') + '>' + escapeHtml(data.site.navHome) + '</a>' +
                    '<a href="./index.html#roster" class="nav-link' + (isPlayer ? ' is-active' : '') + '">' + escapeHtml(data.site.navRoster) + '</a>' +
                '</nav>' +
            '</div>'
        );
    }

    function renderFooter() {
        var data = getData();
        var memberLinks = '';
        for (var i = 0; i < data.allMembers.length; i += 1) {
            var m = data.allMembers[i];
            memberLinks += (
                '<a href="./player.html?player=' + encodeURIComponent(m.id) + '" class="footer-player-link">' +
                    escapeHtml(getCompactMemberLabel(m)) +
                '</a>'
            );
        }

        return (
            '<div class="container footer-inner">' +
                '<div class="footer-brand">' +
                    renderLogo('cw-logo--footer', data.site.footerTitle + ' logo') +
                    '<span class="footer-name">' + escapeHtml(data.site.footerTitle) + '</span>' +
                '</div>' +
                '<div class="footer-links" aria-label="Team Members">' +
                    memberLinks +
                '</div>' +
                (data.site.domain ? '<span class="footer-domain">' + escapeHtml(data.site.domain) + '</span>' : '') +
            '</div>'
        );
    }

    function renderRosterCard(player) {
        var data = getData();
        var displayName = data.getDisplayName(player);
        var href = './player.html?player=' + encodeURIComponent(player.id);
        var alt = displayName + ' — ' + player.role;

        return (
            '<a class="roster-card" href="' + href + '">' +
                '<div class="roster-media">' +
                    renderMemberPhoto(player, alt, false) +
                '</div>' +
                '<div class="roster-meta">' +
                    '<h3 class="roster-name">' + escapeHtml(displayName) + '</h3>' +
                    renderRealName(player, { tag: 'p', baseClass: 'roster-real-name' }) +
                    '<p class="roster-role">' + escapeHtml(player.role) + '</p>' +
                    '<div class="roster-origin">' +
                        renderFlag(player, { showLabel: true, fallbackText: data.site.pendingNationality, size: 'sm' }) +
                        renderNumber(player) +
                    '</div>' +
                '</div>' +
            '</a>'
        );
    }

    function renderCoachCard(coach) {
        var data = getData();
        var displayName = data.getDisplayName(coach);
        var href = './player.html?player=' + encodeURIComponent(coach.id);
        var alt = (displayName === (data.site.pendingName || 'TBD') ? getCompactMemberLabel(coach) : displayName) + ' — ' + coach.role;

        return (
            '<a class="coach-card" href="' + href + '">' +
                '<div class="coach-media">' +
                    renderMemberPhoto(coach, alt, false) +
                '</div>' +
                '<div class="coach-meta">' +
                    '<p class="coach-role-eyebrow">' + escapeHtml(coach.role) + '</p>' +
                    '<h3 class="coach-name">' + escapeHtml(displayName) + '</h3>' +
                    renderRealName(coach, { tag: 'p', baseClass: 'coach-real-name' }) +
                    '<div class="coach-origin">' +
                        renderFlag(coach, { showLabel: true, fallbackText: data.site.pendingNationality, size: 'sm' }) +
                        renderNumber(coach) +
                    '</div>' +
                    '<span class="coach-link-cue">' + escapeHtml(data.site.viewProfile) + ' &rarr;</span>' +
                '</div>' +
            '</a>'
        );
    }

    function renderRosterSwitcher(activeId, allMembers) {
        var data = getData();
        var items = '';
        for (var i = 0; i < allMembers.length; i += 1) {
            var m = allMembers[i];
            var isCurrent = m.id === activeId;
            items += (
                '<a href="./player.html?player=' + encodeURIComponent(m.id) + '" class="switcher-item' + (isCurrent ? ' is-current' : '') + '"' + (isCurrent ? ' aria-current="page"' : '') + '>' +
                    '<span class="switcher-name">' + escapeHtml(getCompactMemberLabel(m)) + '</span>' +
                    '<span class="switcher-role">' + escapeHtml(m.role) + '</span>' +
                '</a>'
            );
        }

        return (
            '<section class="roster-switcher-section" aria-label="Team Roster">' +
                '<div class="container">' +
                    '<div class="section-header">' +
                        '<h2 class="section-title">' + escapeHtml(data.site.switcherHeading) + '</h2>' +
                    '</div>' +
                    '<div class="roster-switcher">' + items + '</div>' +
                '</div>' +
            '</section>'
        );
    }

    function renderPlayerProfile(member, allMembers) {
        var data = getData();
        var displayName = data.getDisplayName(member);
        var titleName = getCompactMemberLabel(member);
        document.title = titleName + ' — ' + data.site.pageTitle;

        var currentIndex = -1;
        for (var i = 0; i < allMembers.length; i += 1) {
            if (allMembers[i].id === member.id) {
                currentIndex = i;
                break;
            }
        }

        var prevMember = allMembers[(currentIndex - 1 + allMembers.length) % allMembers.length];
        var nextMember = allMembers[(currentIndex + 1) % allMembers.length];
        var alt = titleName + ' — ' + member.role;
        var realNameHtml = renderRealName(member, { tag: 'span', baseClass: 'player-real-name' });
        var numberHtml = renderNumber(member);

        return (
            '<div class="profile-topbar">' +
                '<div class="container profile-topbar-inner">' +
                    '<a href="./index.html#roster" class="back-link">&larr; ' + escapeHtml(data.site.backToRoster) + '</a>' +
                '</div>' +
            '</div>' +
            '<section class="profile-section">' +
                '<div class="container profile-layout">' +
                    '<div class="profile-media">' +
                        renderMemberPhoto(member, alt, true) +
                    '</div>' +
                    '<div class="profile-details">' +
                        '<p class="profile-role-eyebrow">' + escapeHtml(member.role) + '</p>' +
                        '<h1 class="profile-name">' + escapeHtml(displayName) + '</h1>' +
                        renderDescription(member) +
                        '<dl class="profile-specs">' +
                            (realNameHtml ? (
                                '<div class="spec-row">' +
                                    '<dt>' + escapeHtml(data.site.realNameLabel) + '</dt>' +
                                    '<dd>' + realNameHtml + '</dd>' +
                                '</div>'
                            ) : '') +
                            '<div class="spec-row">' +
                                '<dt>' + escapeHtml(data.site.roleLabel) + '</dt>' +
                                '<dd>' + escapeHtml(member.role) + '</dd>' +
                            '</div>' +
                            (numberHtml ? (
                                '<div class="spec-row">' +
                                    '<dt>' + escapeHtml(data.site.numberLabel) + '</dt>' +
                                    '<dd>' + numberHtml + '</dd>' +
                                '</div>'
                            ) : '') +
                            '<div class="spec-row">' +
                                '<dt>' + escapeHtml(data.site.nationalityLabel) + '</dt>' +
                                '<dd>' + renderFlag(member, { showLabel: true, fallbackText: data.site.profilePendingNationality, size: 'md' }) + '</dd>' +
                            '</div>' +
                        '</dl>' +
                        '<nav class="profile-pager" aria-label="Teammate navigation">' +
                            '<a href="./player.html?player=' + encodeURIComponent(prevMember.id) + '" class="pager-link">' +
                                '<span class="pager-dir">&larr; ' + escapeHtml(data.site.previousLabel) + '</span>' +
                                '<span class="pager-name">' + escapeHtml(getCompactMemberLabel(prevMember)) + '</span>' +
                            '</a>' +
                            '<a href="./player.html?player=' + encodeURIComponent(nextMember.id) + '" class="pager-link pager-link--next">' +
                                '<span class="pager-dir">' + escapeHtml(data.site.nextLabel) + ' &rarr;</span>' +
                                '<span class="pager-name">' + escapeHtml(getCompactMemberLabel(nextMember)) + '</span>' +
                            '</a>' +
                        '</nav>' +
                    '</div>' +
                '</div>' +
            '</section>' +
            renderRosterSwitcher(member.id, allMembers)
        );
    }

    function renderPlayerNotFound(requestedId, allMembers) {
        var data = getData();
        document.title = 'Not Found — ' + data.site.pageTitle;
        return (
            '<div class="profile-topbar">' +
                '<div class="container profile-topbar-inner">' +
                    '<a href="./index.html#roster" class="back-link">&larr; ' + escapeHtml(data.site.backToRoster) + '</a>' +
                '</div>' +
            '</div>' +
            '<section class="not-found-section">' +
                '<div class="container not-found-inner">' +
                    '<h1 class="not-found-title">Profile Not Found</h1>' +
                    '<p class="not-found-copy">No team member matches <code>' + escapeHtml(requestedId) + '</code>. Select a member below.</p>' +
                    '<a href="./index.html#roster" class="text-action">Return to ' + escapeHtml(data.site.rosterHeading) + ' &rarr;</a>' +
                '</div>' +
            '</section>' +
            renderRosterSwitcher('', allMembers)
        );
    }

    global.CHILL_WILL_UI = {
        escapeHtml: escapeHtml,
        renderLogo: renderLogo,
        renderFlag: renderFlag,
        renderRealName: renderRealName,
        renderNumber: renderNumber,
        renderDescription: renderDescription,
        bindPhotoFallbacks: bindPhotoFallbacks,
        bindFlagFallbacks: bindFlagFallbacks,
        renderHeader: renderHeader,
        renderFooter: renderFooter,
        renderRosterCard: renderRosterCard,
        renderCoachCard: renderCoachCard,
        renderPlayerProfile: renderPlayerProfile,
        renderPlayerNotFound: renderPlayerNotFound
    };
})(window);

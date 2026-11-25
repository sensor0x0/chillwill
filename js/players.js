/**
 * ============================================================================
 * Chill Will — Site Strings, Roster & Coach Configuration
 * ============================================================================
 * Everything on the website can be edited from this single file.
 * All text renders in the exact capitalization you enter below.
 */
(function (global) {
    'use strict';

    /* ========================================================================
       1. SITE STRINGS & BRANDING
       ======================================================================== */
    var SITE = {
        pageTitle: 'Chill Will',            // Browser tab title
        headerTitle: 'Chilliam William SGS Movers Counter-Strike',          // Top navigation bar title (independent from teamName)
        teamName: 'Chill Will',             // Main homepage hero heading
        footerTitle: 'Chill Will',          // Footer brand text
        domain: 'chillwill.lol',            // Right-side footer text (leave '' to hide)
        logo: './images/chill-will-logo.webp',

        // Navigation & section headings
        navHome: 'Home',
        navRoster: 'Roster',
        rosterHeading: 'Roster',
        coachHeading: 'Coach',
        switcherHeading: 'Roster',

        // Card & profile labels
        backToRoster: 'Back to Roster',
        viewProfile: 'View profile',
        realNameLabel: 'Name',
        roleLabel: 'Role',
        numberLabel: 'Number',
        nationalityLabel: 'Nationality',
        previousLabel: 'Previous',
        nextLabel: 'Next',

        // Placeholder text shown when a field is left blank '' (set '' to hide)
        pendingName: 'TBD',
        pendingRealName: 'Name TBD',
        pendingCoachLabel: 'Coach',
        pendingNumber: '#—',
        pendingNationality: 'TBD',
        profilePendingNationality: 'To be confirmed',
        pendingDescription: 'Description coming soon.'
    };


    /* ========================================================================
       1B. FACEIT TRACKER CONFIG (Shared defaults across all profiles)
       ======================================================================== */
    var FACEIT_CONFIG = {
        season: 'SEASON 9',
        challengerMaxRank: 1000,            // worldRank 1–1000 (at 2001+ ELO) shows Challenger pill
        iconBaseUrl: 'https://cdn.jsdelivr.net/gh/Juknum/counter-strike-icons@main/faceit',
        challengerIconFile: '11.svg',
        levelThresholds: [
            { level: 10, minElo: 2001 },
            { level: 9,  minElo: 1751 },
            { level: 8,  minElo: 1531 },
            { level: 7,  minElo: 1351 },
            { level: 6,  minElo: 1201 },
            { level: 5,  minElo: 1051 },
            { level: 4,  minElo: 901 },
            { level: 3,  minElo: 751 },
            { level: 2,  minElo: 501 },
            { level: 1,  minElo: 1 }
        ]
    };


    /* ========================================================================
       2. PLAYER: akM
       ------------------------------------------------------------------------
       - flag: 2-letter ISO code ('GB', 'US', 'DK', 'GB-ENG') OR image path
       - nationality: Custom text, or leave '' to auto-fill from ISO flag code
       - photo: Supports .png (including transparent), .webp, .jpg, .jpeg.
         You can either update this path or simply replace the file in
         ./images/players/ keeping the same filename (e.g. akm.png).
       - description: Multi-paragraph text supported (separate with blank lines)
       - faceit: Player-specific FACEIT tracker values:
         * enabled: true/false to show or hide the tracker on this profile
         * elo: Number (automatically picks Level 0-10 icon, or Challenger)
         * countryRank: Number or null (e.g. 1 -> '#1' next to their flag)
         * worldRank: Number or null (1-1000 at 2001+ ELO = Challenger pill;
           null or >1000 = regular Level 10 icon)
         * stats: { kd, kr, adr, avg, hs, win }
       ======================================================================== */
    var PLAYER_AKM = {
        id: 'akm',
        name: 'akM',
        realName: 'Benji Kaprizov',
        number: '72',
        role: 'Star Rifler',
        nationality: '',
        flag: 'DE',
        photo: './images/players/akm.png',
        imagePosition: '50% 20%',
        description: `Benji "akM" Kaprizov is the soul and star rifler of Team Chilliam William, hailing from Esslingen, Germany, the young rifler signed with the core of Chilliam William alongside each other member on 24/11/26. He boasts Tier 2 Rocket League experience with LLHonved, and now plays aggressive, fast-paced Counter-Strike on the T side, and brings a solid Anchor/Flex presence on the CT side, with an average rating of 1.29 across the last 50 series, he looks to bring style and flair to the Chilliam William core, with previous experience alongside teammate "Sensor" he looks to make waves as an up and coming talent, already ranked among HLTV's top 100 prospects, what's next for akM?`,
        faceit: {
            enabled: true,
            elo: 4237,
            countryRank: 3,
            worldRank: 111,
            stats: {
                kd: '1.27',
                kr: '0.85',
                adr: '94.6',
                avg: '18.9',
                hs: '66%',
                win: '57%'
            }
        }
    };


    /* ========================================================================
       3. PLAYER: Sensor
       ======================================================================== */
    var PLAYER_SENSOR = {
        id: 'sensor',
        name: 'Sensor',
        realName: 'Aleksander Koppel',
        number: '26',
        role: 'Rifler / AWPer',
        nationality: '',
        flag: 'EE',
        photo: './images/players/sensor.png',
        imagePosition: '50% 20%',
        description: `Born in Tallinn in the late 2000s, Sensor brings an aggressive approach to both the rifle and AWP, fitting seamlessly into superpigeon99's calling style. Having previously played alongside akM, the duo share an almost telepathic understanding of the game, creating a level of synergy rarely witnessed in the competitive scene. His work with akM has risen Chill Will to be a feared power amongst T1 Counter-Strike teams, with him averaging a 1.25 rating in the last 3 months. Off the server, Sensor firmly believes that no shot is ever truly missed, only unregistered.`,
        faceit: {
            enabled: true,
            elo: 3738,
            countryRank: 8,
            worldRank: 647,
            stats: {
                kd: '1.24',
                kr: '0.81',
                adr: '88.4',
                avg: '17.9',
                hs: '53%',
                win: '56%'
            }
        }
    };


    /* ========================================================================
       4. PLAYER: MooMothRoach
       ======================================================================== */
    var PLAYER_MOOMOTHROACH = {
        id: 'moomothroach',
        name: 'MooMothRoach',
        realName: 'Matthäus Lenz',
        number: '06',
        role: 'Support',
        nationality: '',
        flag: 'DE',
        photo: './images/players/moomothroach.png',
        imagePosition: '50% 20%',
        description: `With the worst aim on the team, Matthäus pivoted to a support role in early 2026 being inspired by William "Mezii" Merriman. You may see this pro in warmup server for 5 minutes at a time, in practice servers trying to remember lineups, or in a teammate's bedroom; helping to reduce stress prior to a tournament. You will see this player just behind akM and Sensor, throwing util and holding the flank until it's time to rotate.`,
        faceit: {
            enabled: true,
            elo: 2943,
            countryRank: 302,
            worldRank: null,
            stats: {
                kd: '0.96',
                kr: '0.67',
                adr: '74.2',
                avg: '14.6',
                hs: '43%',
                win: '54%'
            }
        }
    };


    /* ========================================================================
       5. PLAYER: X&C
       ======================================================================== */
    var PLAYER_XC = {
        id: 'xc',
        name: 'X&C',
        realName: 'Xand Chady',
        number: '39',
        role: 'Closer',
        nationality: '',
        flag: 'GB',
        photo: './images/players/xc.png',
        imagePosition: '50% 20%',
        description: `Despite his first 15,000 hours in Counter-Strike being spent on the skins market, Xand has made a surprising turnaround and is now a tier 1 closer and B anchor. He is known for clutching 1v1s on 80 ping and refusing to pick up a weapon unless it matches his CLEAN loadout. You may see him sporting skins such as P250 - Asiimov, and Paracord Knife - Crimson web, in his tournament appearances.`,
        faceit: {
            enabled: true,
            elo: 2476,
            countryRank: 1120,
            worldRank: null,
            stats: {
                kd: '1.14',
                kr: '0.73',
                adr: '79.3',
                avg: '15.8',
                hs: '54%',
                win: '52%'
            }
        }
    };


    /* ========================================================================
       6. PLAYER: superpigeon99
       ======================================================================== */
    var PLAYER_SUPERPIGEON99 = {
        id: 'superpigeon99',
        name: 'superpigeon99',
        realName: 'Justik Lietuviškas',
        number: '99',
        role: 'In-Game Leader (IGL)',
        nationality: '',
        flag: 'LT',
        photo: './images/players/superpigeon99.png',
        imagePosition: '50% 20%',
        description: `Justik Lietuviškas, known globally as 'The Menace', and to his teammates as 'superpigeon99', has been playing professional Counter-Strike since Beta 4. His experience in the game makes him a proud member of Chill Will in his 27th year of playing with the team. His chemistry with players such as Antonio "Dirtman" Lau, Bradley "Brazzers" Ngata, and Will "Gay" Morgan, have been cemented in to the HLTV Hall of Fame, and in trophies at Chill Will HQ. His relationship with the current roster however has never been stronger. At IEM Cologne Major 2026, he brought them to a landslide success, expertly executing his famed strategy of "lets repeat call guys".`,
        faceit: {
            enabled: true,
            elo: 1918,
            countryRank: null,
            worldRank: null,
            stats: {
                kd: '0.88',
                kr: '0.62',
                adr: '68.4',
                avg: '13.4',
                hs: '39%',
                win: '51%'
            }
        }
    };


    /* ========================================================================
       7. COACH
       ======================================================================== */
    var COACH = {
        id: 'coach',
        name: 'Addy Shentaddy',
        realName: 'Harry Shenton',
        number: 'M6',
        role: 'Head Coach',
        nationality: '',
        flag: 'GB',
        photo: './images/players/coach.png',
        imagePosition: '50% 20%',
        description: `Until 36, Harry received an upbringing as an educator before pivoting to Counter-Strike coaching, this has proved vital in his analytical technique to coaching his team and the control he has over them. Leading to plays never before seen such as his famed "Type go A in all chat" strategy.`,
        faceit: {
            enabled: true,
            elo: 614,
            countryRank: null,
            worldRank: null,
            stats: {
                kd: '0.58',
                kr: '0.41',
                adr: '48.2',
                avg: '8.9',
                hs: '24%',
                win: '41%'
            }
        }
    };


    /* ========================================================================
       INTERNAL HELPERS (No need to edit below this line)
       ======================================================================== */
    var SUBDIVISION_NAMES = {
        'GB-ENG': 'England',
        'GB-SCT': 'Scotland',
        'GB-WLS': 'Wales',
        'GB-NIR': 'Northern Ireland'
    };

    var PLAYERS = [
        PLAYER_AKM,
        PLAYER_SENSOR,
        PLAYER_MOOMOTHROACH,
        PLAYER_XC,
        PLAYER_SUPERPIGEON99
    ];

    var ALL_MEMBERS = PLAYERS.concat([COACH]);

    function isIsoCode(value) {
        return typeof value === 'string' && /^[a-z]{2}(-[a-z]{2,3})?$/i.test(value.trim());
    }

    function getPhoto(member) {
        if (!member) {
            return '';
        }
        return member.photo || member.image || '';
    }

    function getFlagSource(member) {
        if (!member) {
            return '';
        }
        var raw = member.flag || member.countryCode || '';
        return typeof raw === 'string' ? raw.trim() : '';
    }

    function getFlagUrl(flagValue) {
        if (typeof flagValue !== 'string') {
            return '';
        }
        var trimmed = flagValue.trim();
        if (!trimmed) {
            return '';
        }
        if (isIsoCode(trimmed)) {
            return 'https://flagcdn.com/' + trimmed.toLowerCase() + '.svg';
        }
        if (/^(https?:\/\/|\.\/|\.\.\/|\/)/i.test(trimmed) || trimmed.indexOf('/') !== -1 || trimmed.indexOf('.') !== -1) {
            return trimmed;
        }
        return '';
    }

    function getNationalityLabel(member) {
        if (!member) {
            return '';
        }
        var explicit = typeof member.nationality === 'string' ? member.nationality.trim() : '';
        if (explicit) {
            return explicit;
        }

        var flagSource = getFlagSource(member);
        if (!isIsoCode(flagSource)) {
            return '';
        }

        var upper = flagSource.toUpperCase();
        if (SUBDIVISION_NAMES[upper]) {
            return SUBDIVISION_NAMES[upper];
        }

        if (/^[A-Z]{2}$/.test(upper) && typeof Intl !== 'undefined' && typeof Intl.DisplayNames === 'function') {
            try {
                var displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
                var resolved = displayNames.of(upper);
                if (resolved && resolved !== upper) {
                    return resolved;
                }
            } catch (err) {
                return upper;
            }
        }

        return upper;
    }

    function getDisplayName(member) {
        if (member && typeof member.name === 'string' && member.name.trim()) {
            return member.name.trim();
        }
        return SITE.pendingName || 'TBD';
    }

    function getRealName(member) {
        if (member && typeof member.realName === 'string' && member.realName.trim()) {
            return member.realName.trim();
        }
        return '';
    }

    function getMemberById(id) {
        if (!id) {
            return null;
        }
        var normalized = String(id).trim().toLowerCase();
        for (var i = 0; i < ALL_MEMBERS.length; i += 1) {
            if (ALL_MEMBERS[i].id.toLowerCase() === normalized) {
                return ALL_MEMBERS[i];
            }
        }
        return null;
    }

    global.CHILL_WILL = {
        site: SITE,
        team: SITE,
        faceitConfig: FACEIT_CONFIG,
        players: PLAYERS,
        coach: COACH,
        allMembers: ALL_MEMBERS,
        getPhoto: getPhoto,
        getFlagSource: getFlagSource,
        getFlagUrl: getFlagUrl,
        getNationalityLabel: getNationalityLabel,
        getDisplayName: getDisplayName,
        getRealName: getRealName,
        getMemberById: getMemberById,
        getPlayerById: getMemberById
    };
})(window);

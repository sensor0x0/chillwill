(function () {
  'use strict';

  var FLAGS = {
    DE: '../hltv-assets/img/DE_yHZx.avif',
    EE: '../hltv-assets/img/EE_yHZx.avif',
    GB: '../hltv-assets/img/GB_yHZx.gif',
    LT: '../hltv-assets/img/LT_yHZx.avif',
    RU: '../hltv-assets/img/RU_yHZx.avif',
    UA: '../hltv-assets/img/UA_yHZx.avif',
    SE: '../hltv-assets/img/SE_yHZx.gif',
    NO: '../hltv-assets/img/NO_yHZx.gif',
    FR: '../hltv-assets/img/FR_yHZx.avif',
    BR: '../hltv-assets/img/BR_yHZx.gif',
    US: '../hltv-assets/img/US_yHZx.gif',
    PL: '../hltv-assets/img/PL_yHZx.avif',
    PT: '../hltv-assets/img/PT_yHZx.gif',
    RO: '../hltv-assets/img/RO_yHZx.avif',
    RS: '../hltv-assets/img/RS_yHZx.gif',
    NL: '../hltv-assets/img/NL_yHZx.avif',
    CA: '../hltv-assets/img/CA_yHZx.gif',
    WORLD: '../hltv-assets/img/WORLD_yHZx.gif'
  };

  var FORUM_LOGOS = {
    Vitality: '../hltv-assets/img/yeXBldn9w8LZCgdElAenPs_yHZx.avif',
    Spirit: '../hltv-assets/img/ywdn4tmAvXfllLeV2SkkvF_002_yHZx.avif',
    MOUZ: '../hltv-assets/img/IejtXpquZnE8KqYPB1LNKw_yHZx.svg',
    NAVI: '../hltv-assets/img/9iMirAi7ArBLNU8p3kqUTZ_yHZx.svg',
    Astralis: '../hltv-assets/img/9bgXHp-oh1oaXr7F0mTGmd_yHZx.svg',
    FURIA: '../hltv-assets/img/mvNQc4csFGtxXk5guAh8m1_yHZx.svg',
    HEROIC: '../hltv-assets/img/4S22uk_gnZTiQiI-hhH4yp_yHZx.avif',
    Falcons: '../hltv-assets/img/4eJSkDQINNM6Tbs4WvLzkN_yHZx.avif',
    ChillWill: '../images/chill-will-logo.webp'
  };

  function post(num, author, flag, time, likes, flair, body, replies, banned) {
    return {
      num: num,
      author: author,
      flag: flag,
      time: time,
      likes: likes,
      flair: flair || null, // { fan: 'ZywOo' } OR { team: 'Vitality' }
      body: body,
      replies: replies || [],
      banned: !!banned
    };
  }

  var FORUM_THREADS = {
    'cw-fluke': {
      title: 'Chill Will Cologne run fluke?',
      author: 'kaat1L',
      flag: 'FR',
      time: '2026-11-25 17:02',
      likes: 7,
      totalCount: 84,
      flair: { fan: 'ZywOo' },
      opBody: 'Seriously how did a team that loses to B8 in online quarters beat FaZe, Spirit and Vitality 3-2 in LANXESS Arena??\n\nVitality choked 11-8 on Inferno map 5 and akM played like 2024 donk. 0-3 in Singapore stage 1 bookmark it',
      replies: [
        post(2, 'BerlinPeeper', 'DE', '2026-11-25 17:04', 176, { team: 'ChillWill' }, 'cry is free', [
          post(3, 'kaat1L', 'FR', '2026-11-25 17:06', 5, { fan: 'ZywOo' }, 'ez 0-3 in singapore lil bro', [
            post(24, 'Armindless', 'RO', '2026-11-25 17:19', 14, { fan: 'FalleN' }, 'they lost to B8 online, how are they supposed to replicate Cologne when teams prep for them?', [
              post(41, 'kaat1L', 'FR', '2026-11-25 17:25', 1, { fan: 'ZywOo' }, 'Bcz it was Cologne and ZywOo had flu on dust2 + inferno', [
                post(58, 'BalticSniper', 'EE', '2026-11-25 17:32', 22, { fan: 'Sensor' }, '3 maps lost all tournament to only Spirit & Vitality in a BO5 final != fluke win lol', [
                  post(74, 'Robofficial', 'NL', '2026-11-25 17:41', 3, { team: 'ChillWill' }, '0-3 in singapore with a Major trophy still beats 0 trophies with "better firepower"'),
                  post(84, 'Armindless', 'RO', '2026-11-25 17:50', 2, { fan: 'FalleN' }, 'lets revisit this thread dec 2 after MOUZ 2-0')
                ])
              ])
            ])
          ]),
          post(4, 'nordic_enjoyer', 'SE', '2026-11-25 17:07', 19, { fan: 'akM' }, 'french tears tastier than dr pepper')
        ]),
        post(5, 'hltv_analyst_01', 'GB', '2026-11-25 17:09', 8, { team: 'ChillWill' }, 'They went 2-0 vs HEROIC, beat Astralis and pushed MOUZ to 11-13 decider at EPL.\n\nYou don\'t stay #11 VRS for 5 months off one lucky weekend.'),
        post(6, 's1mple_comeback_when', 'UA', '2026-11-25 17:12', 4, { team: 'NAVI' }, 'FaZe -> Spirit -> Vitality BO5 is literally the hardest playoff run since Gambit Krakow lmao', [
          post(9, 'BR_FalleN_Fan', 'BR', '2026-11-25 17:14', 11, { team: 'FURIA' }, 'respect Gambit 2017 but beating Spirit + Vitality back to back in LANXESS is insane'),
          post(15, 'SpiritCopium', 'RU', '2026-11-25 17:17', 0, { team: 'Spirit' }, 'Ancient 13-6 still gives me nightmares ngl')
        ]),
        post(12, 'vac_detector_99', 'RU', '2026-11-25 17:16', 0, null, 'check akm pc immediately, 69 kills vs zywoo in final is blatant', [], true),
        post(18, 'DeagleMerchant', 'PL', '2026-11-25 17:21', 27, { fan: 'MooMothRoach' }, 'Everyone talks about akM but MooMothRoach flashing entire Vitality roster blind on banana every gun round in OT won map 5.', [
          post(31, 'akM_fanclub', 'DE', '2026-11-25 17:28', 6, { fan: 'akM' }, '+1 X&C B anchor didn\'t fold once in OT either')
        ]),
        post(37, 'NA_Copium', 'US', '2026-11-25 17:30', 53, { fan: '2015' }, 'still more CS2 major trophies than all of NA combined icant'),
        post(49, 'tugaCS', 'PT', '2026-11-25 17:36', 3, null, 'they 2-0\'d us in CCT final too, annoying as hell on Anubis because Sensor hits every spam'),
        post(63, 'ChillWillUltra', 'GB', '2026-11-25 17:44', 9, { team: 'ChillWill' }, 'stage 3 singapore minimum bookmark me')
      ]
    },

    'cw-akm': {
      title: 'akM top 10 2026?',
      author: 'BerlinPeeper',
      flag: 'DE',
      time: '2026-11-25 15:40',
      likes: 12,
      totalCount: 51,
      flair: { fan: 'akM' },
      opBody: '1.29 Rating 2.1 across 154 maps\nIEM Cologne Major 2026 MVP (1.31 rating, 69-51 vs Vitality in BO5 final)\n4,237 ELO #3 Germany on FACEIT\n\nSurely top 8 minimum right?',
      replies: [
        post(2, 'stats_dont_lie', 'NO', '2026-11-25 15:42', 31, { team: 'Astralis' }, 'Small sample vs top 5 at studio LANs compared to donk/ZywOo/m0NESY/sh1ro.\n\nProbably #9-#11 unless Chill Will make Singapore playoffs.', [
          post(3, 'BerlinPeeper', 'DE', '2026-11-25 15:44', 4, { fan: 'akM' }, 'Did he not outfrag ZywOo head to head in Cologne final??', [
            post(19, 'stats_dont_lie', 'NO', '2026-11-25 15:56', 18, { team: 'Astralis' }, 'Yes over 5 maps. Top 20 rewards whole-year big event sample, not 1 Cologne trophy + 2 CCTs.')
          ])
        ]),
        post(4, 's1mple_was_right', 'RU', '2026-11-25 15:46', 9, { fan: 'donk' }, 'donk > ZywOo > m0NESY > akM atm mechanically'),
        post(7, 'serbian_aim', 'RS', '2026-11-25 15:49', 1, { team: 'Falcons' }, 'akM literally farms tier 2 CCT + 1 outlier major. #16 at best', [
          post(11, 'akM_fanclub', 'DE', '2026-11-25 15:51', 64, { fan: 'akM' }, '"outlier major" winning IEM Cologne in LANXESS Arena as MVP hahahahaha')
        ]),
        post(14, 'KrimboEnjoyer', 'DE', '2026-11-25 15:54', 16, { team: 'ChillWill' }, 'German CS was dead in a ditch for 5 years until BIG got outclassed by an SGS Movers jersey'),
        post(22, 'polish_hater', 'PL', '2026-11-25 15:59', 5, { fan: 'akM' }, '94.6 ADR with 66% HS is actually disgusting', [
          post(28, 'NL_Aimer', 'NL', '2026-11-25 16:03', 2, null, 'dude plays 3 hours of DM before officials, pure crisp aim')
        ]),
        post(33, 'faze_cope', 'CA', '2026-11-25 16:08', 4, null, 'still annoyed he went 42-26 against us in quarterfinals without dropping a map'),
        post(39, 'troll1234', 'RO', '2026-11-25 16:12', 0, null, 'onliner, won\'t get 1.00 rating in Singapore', [], true),
        post(44, 'uk_cs_propaganda', 'GB', '2026-11-25 16:17', 7, { team: 'ChillWill' }, 'akM #7, Sensor #19 at HLTV Awards in 45 days'),
        post(51, 'mouz_fan_99', 'NL', '2026-11-25 16:24', 3, { team: 'MOUZ' }, 'First survive Dec 2nd against MOUZ then talk')
      ]
    },

    'cw-sensor': {
      title: 'Sensor > sh1ro on Mirage',
      author: 'BalticSniper',
      flag: 'EE',
      time: '2026-11-25 14:18',
      likes: 4,
      totalCount: 63,
      flair: { fan: 'Sensor' },
      opBody: 'Unpopular opinion: Aleksander Koppel plays Mirage connector/window better than almost every T1 AWPer right now.\n\n3738 ELO #8 Estonia, 1.40 vs FaZe, 1.28 vs Vitality, 53% HS because he just buys AK on half buys.',
      replies: [
        post(2, 'ru_awp_enjoyer', 'RU', '2026-11-25 14:20', 89, { fan: 'sh1ro' }, 'bait 2/8', [
          post(3, 'BalticSniper', 'EE', '2026-11-25 14:21', 2, { fan: 'Sensor' }, 'check Cologne semifinal scoreboard buddy', [
            post(17, 'ru_awp_enjoyer', 'RU', '2026-11-25 14:32', 26, { fan: 'sh1ro' }, 'Comparing 3x major playoff AWPer to a guy with 154 HLTV maps is mental illness')
          ])
        ]),
        post(5, 'mirage_only_lv10', 'PL', '2026-11-25 14:24', 19, { fan: 'm0NESY' }, 'Hybrid awpers with >50% HS are way scarier than passive turret awpers ngl. Look at m0NESY / Sensor style.'),
        post(8, 'EstoniaBestBaltic', 'EE', '2026-11-25 14:27', 7, { team: 'ChillWill' }, 'Who won 13-11 on Mirage head to head in Cologne arena??'),
        post(12, 'faze_down_bad', 'NO', '2026-11-25 14:30', 5, { team: 'HEROIC' }, 'His AWP + AK double swing with X&C on Mirage Mid is actually tilting as fuck'),
        post(23, 'InfernoLover', 'SE', '2026-11-25 14:37', 34, { fan: 'Sensor' }, 'He isn\'t even better on Mirage than Inferno. Three 1v2 retakes in a Major final BO5 is generational ice.', [
          post(29, 'uk_cs_propaganda', 'GB', '2026-11-25 14:40', 48, { team: 'ChillWill' }, 'Bro wore sunglasses indoors on HLTV and still dropped 1.27 over 5 maps')
        ]),
        post(38, 'ro_bettor', 'RO', '2026-11-25 14:46', 1, { team: 'Vitality' }, 'lost 400 euro on Vitality because he noscoped ZywOo on B short, delete thread'),
        post(49, 'NA_Copium', 'US', '2026-11-25 14:52', 11, null, '46% HS memes -> 53% HS major EVP. Respect the grind'),
        post(63, 'GlobalElite2016', 'DE', '2026-11-25 15:01', 3, { fan: 'akM' }, 'Top 12 AWPer world easily, Top 5 only if Chill Will keep beating Vitality/MOUZ')
      ]
    },

    'cw-igl': {
      title: 'superpigeon99 0.88 rating IGL lol',
      author: 'RatingObsessed',
      flag: 'RS',
      time: '2026-11-25 13:05',
      likes: 0,
      totalCount: 39,
      flair: { fan: 'donk' },
      opBody: 'Chill Will will never break top 5 with a 1918 elo 0.88-0.95 rating IGL bottom fragging every map against NAVI and MOUZ.\n\nKick superpigeon99, get an actual fragging IGL and win every event.',
      replies: [
        post(2, 'karrigan_enjoyer', 'NO', '2026-11-25 13:07', 112, { fan: 'karrigan' }, 'Braindead take. Every time a team kicks a 0.90 calling IGL for a "fragging IGL" they drop out of top 20 within 6 months.', [
          post(3, 'RatingObsessed', 'RS', '2026-11-25 13:09', 0, { fan: 'donk' }, 'yeah bro losing 7-13 to NAVI with him 8-18 is fine'),
          post(8, 'uk_cs_propaganda', 'GB', '2026-11-25 13:13', 28, { team: 'ChillWill' }, 'He outcalled karrigan, magixx, AND apEX in the exact same Major playoff bracket lmao')
        ]),
        post(5, 'BalticIGL', 'LT', '2026-11-25 13:11', 15, { fan: 'superpigeon99' }, '1918 faceit elo + IEM Cologne Major trophy in LANXESS Arena. What do you have, level 7 dust2 soloq badge?'),
        post(12, 'akM_fanclub', 'DE', '2026-11-25 13:16', 9, { fan: 'akM' }, 'akM literally said in post-match interview he only puts up 1.30 because superpigeon99 calls every mid-round flash', [
          post(16, 'MooMothFan', 'DE', '2026-11-25 13:19', 4, { fan: 'MooMothRoach' }, 'MooMothRoach + superpigeon99 bait themselves first every execute')
        ]),
        post(21, 'falcons_cope', 'WORLD', '2026-11-25 13:23', 6, { team: 'Falcons' }, 'Stacking 5 stars with zero structure always fails eventually'),
        post(27, 'fr_cs_rip', 'FR', '2026-11-25 13:28', 21, { team: 'Vitality' }, 'His Ancient T-side vs Spirit (13-6!) was genuinely best tactical half of Cologne Major', [
          post(31, 'spirit_fan_2024', 'RU', '2026-11-25 13:31', 3, { team: 'Spirit' }, 'please stop reminding me of that Ancient map')
        ]),
        post(35, 'swedish_boomer', 'SE', '2026-11-25 13:35', 8, { team: 'HEROIC' }, 'Gives 2014 Pronax vibes. Terrible PUG stats, absurd late-round reads.'),
        post(39, 'RatingObsessed', 'RS', '2026-11-25 13:40', 1, { fan: 'donk' }, 'fine we will see vs MOUZ in Singapore')
      ]
    },

    'cw-ukcoach': {
      title: 'Addy Shentaddy best UK coach??',
      author: 'UKCS_believer',
      flag: 'GB',
      time: '2026-11-25 11:50',
      likes: 18,
      totalCount: 27,
      flair: { team: 'ChillWill' },
      opBody: 'Imagine telling someone in 2021 that UKCS would win an IEM Cologne Major off a team anchored by X&C and coached by Harry "Addy Shentaddy" Shenton (literally 614 FACEIT ELO).\n\nUnironic Coach of the Year contender at HLTV Awards.',
      replies: [
        post(2, 'de_lul', 'DE', '2026-11-25 11:52', 74, { fan: 'akM' }, '614 elo coaching 4237 elo akM is peak comedy lmao "benji just click heads pls"', [
          post(3, 'UKCS_believer', 'GB', '2026-11-25 11:54', 12, { team: 'ChillWill' }, 'Worked 3-2 against ZywOo didn\'t it???'),
          post(6, 'br_memer', 'BR', '2026-11-25 11:57', 23, { fan: 'b1ad3' }, 'b1ad3 never needed 4k elo either, anti-strat brains > aim')
        ]),
        post(5, 'BritishBanter', 'GB', '2026-11-25 11:56', 8, { fan: 'X&C' }, 'Between X&C dropping 1.13 as closer and Addy calling that 11-12 Inferno pause, it\'s genuinely coming home'),
        post(10, 'ash_fanboy', 'GB', '2026-11-25 12:03', 3, null, 'ashh built GamerLegion from nothing for years, Addy wins ONE Major and takes the crown? calm down', [
          post(14, 'UKCS_believer', 'GB', '2026-11-25 12:06', 17, { team: 'ChillWill' }, 'Did ashh win Cologne Major or reach top 11 VRS with a 2k ELO IGL?? check hltv'),
          post(18, 'eu_neutral', 'NL', '2026-11-25 12:10', 5, null, 'ashh + Addy Shentaddy having UK coaches carry Europe is crazy')
        ]),
        post(21, 'drpepper_enjoyer', 'CA', '2026-11-25 12:15', 41, { team: 'ChillWill' }, 'They wear SGS Movers + Dr Pepper jerseys and beat Spirit and Vitality in Cologne. Build Addy a statue outside Aldershot.'),
        post(24, 'b8_fan', 'UA', '2026-11-25 12:20', 4, { team: 'NAVI' }, 'still couldn\'t anti-strat B8 in BLAST Showdown QF xd'),
        post(27, 'ChillWillUltra', 'GB', '2026-11-25 12:26', 6, { team: 'ChillWill' }, 'SINGAPORE NEXT LADS')
      ]
    }
  };

  function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderFlair(flair) {
    if (!flair) return '';
    if (flair.team && FORUM_LOGOS[flair.team]) {
      var cls = flair.team === 'ChillWill' ? 'teamLogo cw-team-logo' : 'teamLogo';
      return '<img class="' + cls + '" src="' + FORUM_LOGOS[flair.team] + '" alt="' + escHtml(flair.team) + '" title="' + escHtml(flair.team) + '"/><span class="cw-author-pipe">|</span>';
    }
    if (flair.fan) {
      return '<span class="fan-con"><i class="fa fa-heart"></i> ' + escHtml(flair.fan) + '</span><span class="cw-author-pipe">|</span>';
    }
    return '';
  }

  function plusClass(likes, active) {
    var cls = 'plus-button';
    if (likes >= 50) cls += ' super';
    else if (likes >= 15) cls += ' special';
    if (active) cls += ' active';
    return cls;
  }

  function renderBottomBar(targetNum, time, likes) {
    return (
      '<div class="forum-bottombar">' +
      '<div class="time">' + escHtml(time) + '</div>' +
      '<span class="report-button" title="Report post"><i class="fa fa-warning"></i></span>' +
      '<span class="reply-button" data-reply-target="' + targetNum + '">Reply</span>' +
      '<div class="plus-button-container">' +
      '<span class="' + plusClass(likes, false) + '" data-like-btn="1" data-base-likes="' + likes + '"><span>' + likes + '</span></span>' +
      '</div></div>'
    );
  }

  function renderNestedReply(node) {
    var flagUrl = FLAGS[node.flag] || FLAGS.WORLD;
    var authorCls = node.banned ? 'author bannedUser' : 'author';
    var childrenHtml = (node.replies || []).map(function (child) {
      return '<div class="threading">' + renderNestedReply(child) + '</div>';
    }).join('');

    return (
      '<div class="post standard-box" id="cwPost_' + node.num + '" data-post-num="' + node.num + '">' +
      '<div class="forum-topbar" title="Click to fold/unfold reply">' +
      '<div class="replyNum">#' + node.num + '</div>' +
      '<span class="cw-author-meta">' +
      renderFlair(node.flair) +
      '<span class="authorAnchor"><img class="flag" src="' + flagUrl + '" alt="' + escHtml(node.flag) + '" title="' + escHtml(node.flag) + '"/><a class="' + authorCls + '" href="#" data-hltv-static="1">' + escHtml(node.author) + '</a></span>' +
      '</span></div>' +
      '<div class="forum-middle">' + escHtml(node.body) + '</div>' +
      renderBottomBar(node.num, node.time, node.likes) +
      '</div>' +
      childrenHtml
    );
  }

  function findHighestPostNum(list) {
    var maxN = 1;
    list.forEach(function (item) {
      if (item.num > maxN) maxN = item.num;
      var subMax = findHighestPostNum(item.replies || []);
      if (subMax > maxN) maxN = subMax;
    });
    return maxN;
  }

  function findPostObj(list, num) {
    for (var i = 0; i < list.length; i += 1) {
      if (list[i].num === num) return list[i];
      var hit = findPostObj(list[i].replies || [], num);
      if (hit) return hit;
    }
    return null;
  }

  function openForumThread(threadId) {
    var t = FORUM_THREADS[threadId];
    var tp = document.querySelector('.contentCol .teamProfile');
    var fv = document.getElementById('cwForumView');
    if (!t || !tp || !fv) return;

    tp.classList.add('hidden');
    fv.classList.remove('hidden');

    document.querySelectorAll('.right2Col .activitylist a').forEach(function (a) {
      a.classList.toggle('cw-thread-active', a.getAttribute('data-cw-thread') === threadId);
    });

    var opFlag = FLAGS[t.flag] || FLAGS.WORLD;
    var repliesHtml = t.replies.map(renderNestedReply).join('');

    fv.innerHTML =
      '<div class="cw-forum-header">' +
      '<div class="cw-forum-crumbs">' +
      '<a class="cw-forum-crumb-link" href="#infoBox" id="cwForumBackBtn">Chill Will</a>' +
      '<span class="cw-crumb-sep">&rsaquo;</span>' +
      '<a class="cw-forum-crumb-link" href="#" data-hltv-static="1">Counter-Strike</a>' +
      '<span class="cw-crumb-sep">&rsaquo;</span>' +
      '<span class="cw-crumb-current">' + escHtml(t.title) + '</span>' +
      '</div>' +
      '<div class="cw-forum-actions">' +
      '<button class="forum-action-button sub-button" id="cwForumSubBtn" type="button">Subscribe</button>' +
      '<button class="forum-action-button" id="cwForumLastBtn" type="button">Last comment (' + t.totalCount + ')</button>' +
      '</div></div>' +
      '<div class="forumthread" id="cwForumThread">' +
      '<div class="standard-box" id="cwPost_1" data-post-num="1">' +
      '<div class="forum-topbar">' +
      '<span class="topic">' + escHtml(t.title) + '</span>' +
      '<span class="spacer"></span>' +
      '<span class="cw-author-meta">' +
      renderFlair(t.flair) +
      '<span class="authorAnchor"><img class="flag" src="' + opFlag + '" alt="' + escHtml(t.flag) + '"/><a class="author" href="#" data-hltv-static="1">' + escHtml(t.author) + '</a></span>' +
      '</span></div>' +
      '<div class="forum-middle">' + escHtml(t.opBody) + '</div>' +
      renderBottomBar(1, t.time, t.likes) +
      '</div>' +
      '<div class="bottom-spacer"></div>' +
      '</div>' +
      '<div class="forum" id="cwForumPosts">' + repliesHtml + '</div>' +
      '<div class="standard-box cw-forum-reply-box" id="cwBottomReplyBox">' +
      '<div class="cw-forum-reply-title">Post a reply</div>' +
      '<textarea class="cw-forum-reply-textarea" id="cwReplyInput" placeholder="Write a comment..."></textarea>' +
      '<div class="cw-forum-reply-actions">' +
      '<button class="cw-forum-post-btn" id="cwReplySubmit" type="button">Post comment</button>' +
      '</div></div>';

    fv.setAttribute('data-active-thread', threadId);

    var backBtn = document.getElementById('cwForumBackBtn');
    if (backBtn) {
      backBtn.addEventListener('click', function (e) {
        e.preventDefault();
        closeForumThread();
      });
    }

    var subBtn = document.getElementById('cwForumSubBtn');
    if (subBtn) {
      subBtn.addEventListener('click', function () {
        subBtn.textContent = subBtn.textContent === 'Subscribe' ? 'Subscribed' : 'Subscribe';
      });
    }

    var lastBtn = document.getElementById('cwForumLastBtn');
    if (lastBtn) {
      lastBtn.addEventListener('click', function () {
        var maxNum = findHighestPostNum(t.replies);
        var el = document.getElementById('cwPost_' + maxNum);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }

    var submitBtn = document.getElementById('cwReplySubmit');
    var input = document.getElementById('cwReplyInput');
    if (submitBtn && input) {
      submitBtn.addEventListener('click', function () {
        var txt = input.value.trim();
        if (!txt) return;
        t.totalCount += 1;
        var nextNum = Math.max(t.totalCount, findHighestPostNum(t.replies) + 1);
        var now = new Date();
        var stamp = '2026-11-25 ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
        var newReply = post(nextNum, 'ChillWill_Guest', 'WORLD', stamp, 0, { team: 'ChillWill' }, txt, []);
        t.replies.push(newReply);
        var container = document.getElementById('cwForumPosts');
        if (container) container.insertAdjacentHTML('beforeend', renderNestedReply(newReply));
        if (lastBtn) lastBtn.textContent = 'Last comment (' + t.totalCount + ')';
        input.value = '';
      });
    }

    var contentCol = document.querySelector('.contentCol');
    if (contentCol) contentCol.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function closeForumThread() {
    var tp = document.querySelector('.contentCol .teamProfile');
    var fv = document.getElementById('cwForumView');
    if (tp) tp.classList.remove('hidden');
    if (fv) fv.classList.add('hidden');
    document.querySelectorAll('.right2Col .activitylist a').forEach(function (a) {
      a.classList.remove('cw-thread-active');
    });
  }

  // Weekly stepped ranking data (~48 weeks: Dec 25 -> Nov 26)
  var WEEKLY = [
    ['Dec', '25', 49, 46], ['Dec', '25', 48, 45], ['Dec', '25', 47, 45], ['Dec', '25', 46, 44],
    ['Jan', '26', 45, 43], ['Jan', '26', 44, 42], ['Jan', '26', 42, 40], ['Jan', '26', 42, 39], ['Jan', '26', 41, 39],
    ['Feb', '26', 40, 38], ['Feb', '26', 39, 37], ['Feb', '26', 38, 37], ['Feb', '26', 38, 36],
    ['Mar', '26', 37, 35], ['Mar', '26', 36, 35], ['Mar', '26', 35, 34], ['Mar', '26', 34, 33],
    ['Apr', '26', 34, 32], ['Apr', '26', 33, 31], ['Apr', '26', 33, 30], ['Apr', '26', 32, 30],
    ['May', '26', 31, 29], ['May', '26', 30, 28], ['May', '26', 29, 27], ['May', '26', 28, 26],
    ['Jun', '26', 27, 25], ['Jun', '26', 25, 24], ['Jun', '26', 21, 19], ['Jun', '26', 18, 17],
    ['Jul', '26', 13, 11], ['Jul', '26', 11, 9],  ['Jul', '26', 11, 9],  ['Jul', '26', 12, 10],
    ['Aug', '26', 12, 10], ['Aug', '26', 13, 11], ['Aug', '26', 13, 11], ['Aug', '26', 14, 12],
    ['Sep', '26', 15, 13], ['Sep', '26', 15, 13], ['Sep', '26', 14, 12], ['Sep', '26', 14, 12],
    ['Oct', '26', 14, 12], ['Oct', '26', 13, 12], ['Oct', '26', 13, 11], ['Oct', '26', 13, 11],
    ['Nov', '26', 12, 11], ['Nov', '26', 12, 11], ['Nov', '26', 12, 11]
  ];

  var TEAM_OFFSET = [3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1];

  function getSeries(isTeam) {
    return WEEKLY.map(function (pt, idx) {
      var off = isTeam && idx < 12 ? TEAM_OFFSET[idx] : 0;
      return { month: pt[0], year: pt[1], hltv: pt[2] + off, vrs: pt[3] + off };
    });
  }

  function drawChart(canvasId, tooltipId, isTeam) {
    var canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;
    var rect = canvas.parentElement.getBoundingClientRect();
    var w = Math.max(280, Math.round(rect.width || 600));
    var h = Math.max(220, Math.round(rect.height || 280));
    var dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var pts = getSeries(isTeam);
    var pad = { top: 24, right: 12, bottom: 34, left: 28 };
    var cw = w - pad.left - pad.right;
    var ch = h - pad.top - pad.bottom;
    var maxRank = 52;

    function yFor(rank) { return pad.top + ((rank - 1) / (maxRank - 1)) * ch; }
    function xFor(idx) { return pad.left + (idx / (pts.length - 1)) * cw; }

    ctx.clearRect(0, 0, w, h);

    ctx.font = '11px Open Sans, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50].forEach(function (t) {
      var y = Math.round(yFor(t)) + 0.5;
      ctx.strokeStyle = 'rgba(125, 125, 125, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(w - pad.right, y);
      ctx.stroke();
      ctx.fillStyle = '#929a9e';
      ctx.fillText(String(t), pad.left - 6, y);
    });

    var janX = Math.round(xFor(4)) + 0.5;
    ctx.strokeStyle = 'rgba(146, 154, 158, 0.35)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(janX, pad.top);
    ctx.lineTo(janX, pad.top + ch);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(janX - 18, 3, 36, 17);
    ctx.fillStyle = '#1b1f23';
    ctx.font = 'bold 11px Open Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('2026', janX, 12);

    var monthStarts = {};
    pts.forEach(function (pt, idx) {
      var key = pt.month + pt.year;
      if (monthStarts[key] === undefined) monthStarts[key] = idx;
    });
    ctx.font = '11px Open Sans, sans-serif';
    ctx.fillStyle = '#929a9e';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    Object.keys(monthStarts).forEach(function (key, mIdx) {
      if (w < 460 && mIdx % 2 === 1) return;
      var idx = monthStarts[key];
      var x = xFor(idx);
      ctx.fillText(pts[idx].month, x, pad.top + ch + 7);
      ctx.fillText(pts[idx].year, x, pad.top + ch + 19);
    });

    function drawSeries(key, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      pts.forEach(function (pt, idx) {
        var x = xFor(idx);
        var y = yFor(pt[key]);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }
    drawSeries('vrs', '#e48717');
    drawSeries('hltv', '#387ab3');

    var tip = document.getElementById(tooltipId);
    if (!tip || canvas.dataset.bound) return;
    canvas.dataset.bound = '1';
    canvas.addEventListener('mousemove', function (e) {
      var r = canvas.getBoundingClientRect();
      var mx = e.clientX - r.left;
      var idx = Math.max(0, Math.min(pts.length - 1, Math.round(((mx - pad.left) / cw) * (pts.length - 1))));
      var pt = pts[idx];
      tip.innerHTML =
        '<div><strong>' + pt.month + ' ' + pt.year + '</strong></div>' +
        '<div style="color:#87a3bf">HLTV: #' + pt.hltv + '</div>' +
        '<div style="color:#e48717">VRS: #' + pt.vrs + '</div>';
      tip.style.display = 'block';
      var tx = xFor(idx) + 12;
      if (tx + 96 > w) tx = xFor(idx) - 102;
      tip.style.left = Math.max(8, tx) + 'px';
      tip.style.top = Math.max(8, yFor(pt.hltv) - 24) + 'px';
    });
    canvas.addEventListener('mouseleave', function () { tip.style.display = 'none'; });
  }

  function renderCharts() {
    drawChart('cwRankChartCore', 'cwChartTooltipCore', false);
    drawChart('cwRankChartTeam', 'cwChartTooltipTeam', true);
  }

  function switchProfileTab(tabId, scrollTargetId) {
    closeForumThread();
    var tabs = document.querySelectorAll('.teamProfile .tabs .tab[data-content-id]');
    var contents = document.querySelectorAll('.teamProfile .tab-content');
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.getAttribute('data-content-id') === tabId);
    });
    contents.forEach(function (c) {
      c.classList.toggle('hidden', c.id !== tabId);
    });
    if (tabId === 'infoBox') renderCharts();
    var targetEl = scrollTargetId ? document.getElementById(scrollTargetId) : document.querySelector('.teamProfile .tab-wrapper');
    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function initRosterSort() {
    var tbl = document.getElementById('cwPlayersTable');
    if (!tbl) return;
    var tbody = tbl.querySelector('tbody');
    var dirs = {};
    tbl.querySelectorAll('.cw-sort-th').forEach(function (th) {
      th.addEventListener('click', function () {
        var col = th.getAttribute('data-sort-col');
        var desc = !dirs[col];
        dirs[col] = desc;
        var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
        rows.sort(function (a, b) {
          var av = parseFloat(a.getAttribute('data-' + col) || '0');
          var bv = parseFloat(b.getAttribute('data-' + col) || '0');
          return desc ? bv - av : av - bv;
        });
        rows.forEach(function (r) { tbody.appendChild(r); });
      });
    });
  }

  function initControls() {
    document.querySelectorAll('.teamProfile .tabs .tab[data-content-id]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        switchProfileTab(tab.getAttribute('data-content-id'));
      });
    });

    document.querySelectorAll('.sub-navigation').forEach(function (nav) {
      var links = nav.querySelectorAll('.sub-navigation-link[data-target]');
      links.forEach(function (lnk) {
        lnk.addEventListener('click', function () {
          var targetSel = lnk.getAttribute('data-target');
          links.forEach(function (other) {
            other.classList.remove('active');
            var p = document.querySelector(other.getAttribute('data-target'));
            if (p) p.classList.add('hidden');
          });
          lnk.classList.add('active');
          var activePane = document.querySelector(targetSel);
          if (activePane) activePane.classList.remove('hidden');
        });
      });
    });

    document.querySelectorAll('[data-cw-chart-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = btn.getAttribute('data-cw-chart-tab');
        document.querySelectorAll('[data-cw-chart-tab]').forEach(function (b) { b.classList.toggle('selected', b === btn); });
        var corePane = document.getElementById('cwChartPaneCore');
        var teamPane = document.getElementById('cwChartPaneTeam');
        if (corePane && teamPane) {
          corePane.classList.toggle('hidden', mode !== 'core');
          teamPane.classList.toggle('hidden', mode !== 'team');
          renderCharts();
        }
      });
    });

    var fanBtn = document.getElementById('cwFanBtn');
    if (fanBtn) {
      fanBtn.addEventListener('click', function () {
        fanBtn.classList.toggle('addFan');
        fanBtn.classList.toggle('removeFan');
      });
    }

    var briefing = document.getElementById('cwBriefing');
    var toggleBtn = document.querySelector('[data-brainbriefing-toggle]');
    if (briefing && toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        var collapsed = briefing.classList.toggle('cw-collapsed');
        toggleBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      });
    }

    document.querySelectorAll('.brainbriefing-vote-button').forEach(function (vbtn) {
      vbtn.addEventListener('click', function () {
        var parent = vbtn.closest('.brainbriefing-vote');
        if (!parent) return;
        parent.querySelectorAll('.brainbriefing-vote-button').forEach(function (b) {
          b.classList.toggle('pressed', b === vbtn);
          b.setAttribute('aria-pressed', b === vbtn ? 'true' : 'false');
        });
      });
    });

    document.querySelectorAll('.map-statistics-row').forEach(function (row) {
      row.addEventListener('click', function () {
        var ext = row.nextElementSibling;
        if (ext && ext.classList.contains('map-statistics-extended')) ext.classList.toggle('hidden');
      });
    });

    document.addEventListener('click', function (e) {
      var threadEl = e.target.closest('[data-cw-thread]');
      if (threadEl) {
        e.preventDefault();
        openForumThread(threadEl.getAttribute('data-cw-thread'));
        return;
      }

      // Like (+ N) toggle
      var likeBtn = e.target.closest('[data-like-btn]');
      if (likeBtn) {
        var base = Number(likeBtn.getAttribute('data-base-likes') || '0');
        var isActive = !likeBtn.classList.contains('active');
        var nextCount = base + (isActive ? 1 : 0);
        likeBtn.className = plusClass(nextCount, isActive);
        var span = likeBtn.querySelector('span');
        if (span) span.textContent = String(nextCount);
        return;
      }

      // Report button
      var repBtn = e.target.closest('.report-button');
      if (repBtn) {
        repBtn.classList.add('disabled');
        repBtn.title = 'Reported';
        return;
      }

      // Inline Reply toggle on any post
      var repTrigger = e.target.closest('[data-reply-target]');
      if (repTrigger) {
        var fv = document.getElementById('cwForumView');
        var threadId = fv && fv.getAttribute('data-active-thread');
        var t = threadId && FORUM_THREADS[threadId];
        var postBox = repTrigger.closest('.standard-box');
        if (!t || !postBox) return;

        var existingBox = fv.querySelector('.cw-inline-reply-wrap');
        if (existingBox) existingBox.remove();

        var targetNum = Number(repTrigger.getAttribute('data-reply-target'));
        var wrap = document.createElement('div');
        wrap.className = targetNum === 1 ? 'cw-inline-reply-wrap' : 'threading newReplyBox cw-inline-reply-wrap';
        wrap.innerHTML =
          '<div class="standard-box cw-forum-reply-box">' +
          '<div class="cw-forum-reply-title">Reply to #' + targetNum + '</div>' +
          '<textarea class="cw-forum-reply-textarea" placeholder="Write a reply..."></textarea>' +
          '<div class="cw-forum-reply-actions">' +
          '<button class="cw-forum-cancel-btn" type="button">Cancel</button>' +
          '<button class="cw-forum-post-btn" type="button">Post reply</button>' +
          '</div></div>';

        postBox.insertAdjacentElement('afterend', wrap);
        var ta = wrap.querySelector('textarea');
        if (ta) ta.focus();
        wrap.querySelector('.cw-forum-cancel-btn').addEventListener('click', function () {
          wrap.remove();
        });
        wrap.querySelector('.cw-forum-post-btn').addEventListener('click', function () {
          var txt = ta ? ta.value.trim() : '';
          if (!txt) return;
          t.totalCount += 1;
          var nextNum = Math.max(t.totalCount, findHighestPostNum(t.replies) + 1);
          var now = new Date();
          var stamp = '2026-11-25 ' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
          var newReply = post(nextNum, 'ChillWill_Guest', 'WORLD', stamp, 0, { team: 'ChillWill' }, txt, []);
          var parentObj = targetNum === 1 ? null : findPostObj(t.replies, targetNum);
          if (parentObj) parentObj.replies.push(newReply);
          else t.replies.push(newReply);

          wrap.remove();
          if (targetNum === 1) {
            var container = document.getElementById('cwForumPosts');
            if (container) container.insertAdjacentHTML('beforeend', renderNestedReply(newReply));
          } else {
            postBox.insertAdjacentHTML('afterend', '<div class="threading">' + renderNestedReply(newReply) + '</div>');
          }
          var lastBtn = document.getElementById('cwForumLastBtn');
          if (lastBtn) lastBtn.textContent = 'Last comment (' + t.totalCount + ')';
        });
        return;
      }

      // Fold/unfold on reply .forum-topbar
      var topbar = e.target.closest('#cwForumPosts .post .forum-topbar');
      if (topbar && !e.target.closest('a')) {
        var postEl = topbar.closest('.post');
        if (postEl) {
          postEl.classList.toggle('cw-folded');
          topbar.classList.toggle('folded');
        }
        return;
      }

      var navEl = e.target.closest('[data-cw-nav]');
      if (navEl) {
        e.preventDefault();
        switchProfileTab(navEl.getAttribute('data-cw-nav'), navEl.getAttribute('data-cw-nav-extra'));
        return;
      }
      var stat = e.target.closest('a[data-hltv-static="1"]');
      if (stat) e.preventDefault();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initControls();
    initRosterSort();
    renderCharts();
    window.addEventListener('resize', renderCharts);
  });
})();

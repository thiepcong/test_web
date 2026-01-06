'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bdcaec375662623f9525aab8915e9b53",
"version.json": "611dc8efba3840e925eb4ca7ba4b0e90",
"splash/img/light-background.png": "f49c6be896de70f42d5a9c5b60305f3c",
"splash/img/dark-background.png": "f49c6be896de70f42d5a9c5b60305f3c",
"index.html": "a6a91c75be286bdbb39ea28f2d38ac5a",
"/": "a6a91c75be286bdbb39ea28f2d38ac5a",
"main.dart.js": "2df90f1bcf004d8e03f02e0b88aaab72",
"Web.config": "51998a27bbd7487b093c618da04bbb80",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "0eb7727eefc555dbee0d178b376babec",
"icons/Icon-192.png": "d6a2cd68689f740887c60b31f8219d2b",
"icons/Icon-maskable-192.png": "d6a2cd68689f740887c60b31f8219d2b",
"icons/Icon-maskable-512.png": "1129202bdffc6b08a7a4c5da92d9fa3f",
"icons/Icon-512.png": "1129202bdffc6b08a7a4c5da92d9fa3f",
"manifest.json": "47df7c933d461b3fca79d8c355542740",
"assets/shorebird.yaml": "8e97355236916fd43cd512ac05fefc60",
"assets/AssetManifest.json": "dc9f9147acc44ee5d50c688e977e7297",
"assets/NOTICES": "436bbdc82209f2cf4693cc48ff52c688",
"assets/FontManifest.json": "a12dc8b6632bd676471398e6229b3573",
"assets/AssetManifest.bin.json": "818761ac3ad4931ff498029acdc6e54a",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "cfcc98d389d1ee4358f773efe8a9cdac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/pdfrx/assets/pdfium.wasm": "e45b1bd7c49fb3c1b265367302856ed6",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "adcae9fa02fc61df6c478f3a81275436",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/win_ble/assets/BLEServer.exe": "28aa0e2566083c860f029ff4bc32c4ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c8c436731f093cd784b7ef01cb3ed500",
"assets/fonts/MaterialIcons-Regular.otf": "b7f5095eb9b9cdd14c1bce4fed4725e6",
"assets/assets/images/im_mb_bank.png": "5c14555c00acee3fb40390c3baf52ba2",
"assets/assets/images/img_empty_box.png": "9e55f18c6e8d3fbcdee55bdda94053f6",
"assets/assets/images/im_background_atheletics.png": "014c37a34b5e26d415b5012467684735",
"assets/assets/images/img_total_revenue.png": "4fea798a62ae52306a1e6128bd35c617",
"assets/assets/images/img_create_expense.png": "4616f6692a1d0a6216bb7a46fa2b7a86",
"assets/assets/images/img_bg_login.png": "e2c4bfb4bd26bf28d795c38395f9f6ad",
"assets/assets/images/im_zalo.png": "5791118d5ad6e3bc832da19b4fbc655f",
"assets/assets/images/im_excel_export.png": "a6a5c4559a5ba53c5b7bde84e4afed22",
"assets/assets/images/im_splash.png": "f49c6be896de70f42d5a9c5b60305f3c",
"assets/assets/images/im_acb_bank.png": "f291e0340ec85970463081e817f9662a",
"assets/assets/images/img_create_revenue.png": "dd0408346bdc760a8b5f948f079f3c08",
"assets/assets/images/im_bg_branch.png": "231e18f7ac6669709cbf411ec8057f8f",
"assets/assets/images/img_total_expense.png": "992f71a4e24ecbf4ca6750ae3b33c14e",
"assets/assets/images/icon_app.png": "5a38dda5ffe652d676f1d1697a3a4202",
"assets/assets/images/im_bg_connect_bank.png": "150558755caaad9a70e0721910af0e44",
"assets/assets/images/img_logo.png": "be3aa1a9c980ea414841587528f48011",
"assets/assets/icons/ic_archive_add.svg": "f9f6ac1d3670bcef38cabddb18a7bede",
"assets/assets/icons/ic_zalo_msg.svg": "c3dc2f7506e6b509ad668962347291fb",
"assets/assets/icons/ic_parachute_line.svg": "af61983a798811c8dca1f290c794792b",
"assets/assets/icons/ic_filter_line.svg": "eedb038b75406801565c592f48f6f011",
"assets/assets/icons/ic_more_circle.svg": "f47a78d805549938d9eb2de12d61c646",
"assets/assets/icons/ic_calendar_search.svg": "dcc4ece2094445962e6280c0a6fe6692",
"assets/assets/icons/ic_clock.svg": "b3b2c3eb6766fb12aa674ebc1a264e9c",
"assets/assets/icons/ic_calendar3.svg": "0008e866982c20f46330b432a67a7298",
"assets/assets/icons/ic_note.svg": "92ab287d93243547e6b9b71249b2ca27",
"assets/assets/icons/ic_laptop.svg": "19c1b08857233299b5f49ff8483d9770",
"assets/assets/icons/ic_filter.svg": "f6f1cec531c5ebe20991ec6787b86bc5",
"assets/assets/icons/ic_calendar2.svg": "976da85170729db07edf2fce3bc35487",
"assets/assets/icons/ic_thong_ke.svg": "a861ede6a98e1166a2043ee00003f440",
"assets/assets/icons/ic_mail.svg": "5946646265a4f76d8345289e9fba935a",
"assets/assets/icons/ic_function_not.svg": "218083adf6c0bcf3cd56336e76748cea",
"assets/assets/icons/ic_share.svg": "7ae29a069d21e9d1fec0d5aadf8f8d7d",
"assets/assets/icons/ic_time_quarter.svg": "dc901c629d5d0bfddf66ae1534abcdb5",
"assets/assets/icons/ic_gift_line.svg": "29f834211253c33f07176c7b4212e218",
"assets/assets/icons/ic_trailing.svg": "e45ca281c719d9c48caaa8a374116c21",
"assets/assets/icons/ic_rank_third.svg": "769337ce2f0d5bec9b4b256912956056",
"assets/assets/icons/ic_trophy_line.svg": "819a99f3ffae330808fb4babf56827c7",
"assets/assets/icons/ic_receipt3.svg": "36567668c46d4e7607934573b20abc22",
"assets/assets/icons/ic_card_add.svg": "21750023fc80fdb2cc3e2ee255a2c55f",
"assets/assets/icons/ic_money.svg": "ca139552a3f7a62d730b067a25552347",
"assets/assets/icons/ic_filter_edit.svg": "c62e7568f6b7ede1861e4e6488ca8bb8",
"assets/assets/icons/ic_rental_schedule_not.svg": "e8aa0474ad1cd75c4dfd8772c1a2266a",
"assets/assets/icons/ic_facebook.svg": "a42dbadf8c8086bbddf17633d98ebd0b",
"assets/assets/icons/ic_lock.svg": "7c8c5c6c8ce6c6f3923e5ff4d7f7c557",
"assets/assets/icons/ic_rank_first.svg": "324b4650163679a481bfe6cdc22df158",
"assets/assets/icons/ic_delete.svg": "3abafc10c9b908dc105d85b8c5e5ac36",
"assets/assets/icons/ic_success.svg": "bff27aa33374183a610ec8f0d437cb46",
"assets/assets/icons/ic_dollar_square.svg": "45cf771606fab727f0acef2ea6b7b86e",
"assets/assets/icons/ic_bill_line.svg": "ba5eb645b29faeba00d021ac562acd55",
"assets/assets/icons/ic_receipt2.svg": "7a1b7cba6010926980a841cd8eee5d82",
"assets/assets/icons/ic_x.svg": "0057ff599a942e23eb68d1c864f75ef4",
"assets/assets/icons/ic_arrow_right_line.svg": "90a264dc570f4e9d638098de08a1f021",
"assets/assets/icons/ic_checkbox_unchoose.svg": "d42e8034edf8f34d5d3632457145fa16",
"assets/assets/icons/ic_eye_close_line.svg": "73209ca33ada33ab834c3512b93cde15",
"assets/assets/icons/ic_archive_book.svg": "23c5d9fe7440bde2d34d30025f9699da",
"assets/assets/icons/ic_calendar5.svg": "93e1c4b6377e2175befc5f71ac25ade8",
"assets/assets/icons/ic_calendar4.svg": "cf7e227d38fa0376ba57662af4338154",
"assets/assets/icons/ic_add_circle2.svg": "d5872f37b7e4ca5ba5c689bfe326ef11",
"assets/assets/icons/ic_calendar_2_line.svg": "4267037894add4e2f98150d25c1cf63e",
"assets/assets/icons/ic_map_pin_line.svg": "42ce88125b379c05e358ab0b145de679",
"assets/assets/icons/ic_data2.svg": "9508ddd1da8cbf6fa6480b5f492cacf6",
"assets/assets/icons/ic_card_pay_line.svg": "6f066c6e670714f8bdf986afe9ecce4b",
"assets/assets/icons/ic_phone_call.svg": "d54fcdc74ede12374eef115ce5c6d716",
"assets/assets/icons/ic_avatar.svg": "ca9c0a31bdd429b2418c93a41a4e4965",
"assets/assets/icons/ic_photo_album_2_line.svg": "34f7734e5d24f4d9e7f48e2a513053c1",
"assets/assets/icons/ic_history.svg": "cb4b24c0116cb7fdecc2d80c447f9bbc",
"assets/assets/icons/ic_cards.svg": "cb1eefda0d2c33185ca99c10985f48f4",
"assets/assets/icons/ic_timer.svg": "c7ecb5648e5be7671f129ef746cea0ac",
"assets/assets/icons/ic_radio_choose.svg": "15ba50e9b7e177c618379e5312254d26",
"assets/assets/icons/ic_classify_2_line.svg": "c4c805850482518abd6f89d8e7a2f43c",
"assets/assets/icons/ic_menu2.svg": "45289c0ebc64bf6725eef177d4553dc3",
"assets/assets/icons/ic_info_circle2.svg": "703bc2721a780a7d2aabbe21507ce50c",
"assets/assets/icons/ic_apple.svg": "356213e3a9f31e9d55931debbd804c6f",
"assets/assets/icons/ic_add.svg": "17ecfd408244bb6c017f84b6cfdf4a92",
"assets/assets/icons/ic_tick.svg": "d70ba35cabb724cc8ee6623f3c2c146e",
"assets/assets/icons/ic_warning2.svg": "50a4e60670d14e78f5426cf18901d03a",
"assets/assets/icons/ic_menu3.svg": "03350c5c7408ab00985dfae89043d87d",
"assets/assets/icons/ic_dollar_circle2.svg": "637bb2312f77945c74b1da08e71750e7",
"assets/assets/icons/ic_chat_2_line.svg": "36a3811b7ad98ac37a0b301d611c3cc7",
"assets/assets/icons/ic_calendar_search_choose.svg": "bc820e8d920e9c9790bf718ac1f7ae0f",
"assets/assets/icons/ic_danger2.svg": "fb5c6db2110ff5badb112d0e33a01c44",
"assets/assets/icons/ic_forward.svg": "27592eb9dafa483e7cb4ba9d35299aeb",
"assets/assets/icons/ic_location.svg": "492710194df7d010dadc6713c2d4243e",
"assets/assets/icons/ic_language_change.svg": "4faa97de29cebab3d6c779165031134a",
"assets/assets/icons/ic_home.svg": "4fa217ef5bd8e9c2c732fb28de85104d",
"assets/assets/icons/ic_minus_cirlce.svg": "7ede5ddb7b05b4318202401621b138ae",
"assets/assets/icons/ic_printer.svg": "4e78354754bd87a4baefd5cfeb262dcf",
"assets/assets/icons/ic_close.svg": "386e14e632aae21b871771e0ef4afb5d",
"assets/assets/icons/ic_clipboard_tick2.svg": "b4f6d331ab6442965509260fd7f8f6ba",
"assets/assets/icons/ic_tag_user.svg": "8ef41b4d23227af792ef272653b9c3b8",
"assets/assets/icons/ic_japan.svg": "3e3e9b7ccd3716c99eb3d4493c01ecbd",
"assets/assets/icons/ic_%2520decentralization.svg": "9eb532bc495ee40bd79b9af201d673a9",
"assets/assets/icons/ic_rental_schedule.svg": "bd722fb70ed28f4d7e3470da1a7d1266",
"assets/assets/icons/ic_phone_line.svg": "3b7a07046161ea3e9ad04133b2bf122a",
"assets/assets/icons/ic_store_line.svg": "ae8f27ff857e70ad31cf289e2c994e9a",
"assets/assets/icons/ic_football.svg": "9da0146450910b1025d68e058f012890",
"assets/assets/icons/ic_image.svg": "2dc71434e8fce84ed51b2595b021ca64",
"assets/assets/icons/ic_message.svg": "321ba41decef16636da8d04fcb70182d",
"assets/assets/icons/ic_phone2.svg": "15da2e9feee698f6e2874bb879534652",
"assets/assets/icons/ic_dark_theme.svg": "4d4129d33d65791cd3d8f3ea48266984",
"assets/assets/icons/ic_print_line.svg": "64cb2970044e33c35db5317a8b693ed4",
"assets/assets/icons/ic_radio_unselect.svg": "2cbc10689ecb9a94d7d780718af11218",
"assets/assets/icons/ic_vietnam.svg": "25a7228bc50b6441aeb1403f31a215cf",
"assets/assets/icons/ic_like.svg": "366f21e09af8c18b89d677160cf6663e",
"assets/assets/icons/ic_pencil_line.svg": "e4d39fd3e291916a6427db94e3087865",
"assets/assets/icons/ic_ellipse_error.svg": "df1545f16417c5207243df5eab90b7c6",
"assets/assets/icons/ic_volleyball.svg": "9f9123d5e1027fa864bc3d64781988b8",
"assets/assets/icons/ic_refresh2.svg": "6ac93a3c0ab5391ba45935ef35ae177c",
"assets/assets/icons/ic_voucher_default.svg": "82aab485e4dc4790fc19545ae9e4df26",
"assets/assets/icons/ic_calendar.svg": "ce49c464e532d47c11dc349a858283e8",
"assets/assets/icons/ic_settings_3_line.svg": "6f369e2729b255cc70f4c93ecaf22829",
"assets/assets/icons/ic_chart_line_line.svg": "c90bdfec9d917f1719640143004bf97a",
"assets/assets/icons/ic_pencil.svg": "dcfd40eeacceb2fd25366bceb0e43fd3",
"assets/assets/icons/ic_voucher_detail.svg": "b4ded5dd07d588c64b08d26a7c47eb3a",
"assets/assets/icons/ic_receive_money_line.svg": "4aee23b053bcdd8a19eefae70543d0c4",
"assets/assets/icons/ic_news_line.svg": "055ea0019afcd9f2071ca24642e811cc",
"assets/assets/icons/ic_radio_select2.svg": "530c2883e302eeb1806acb49d517f33a",
"assets/assets/icons/ic_user_setting_line.svg": "f0b685688bdf6ec30cb3592216f9430a",
"assets/assets/icons/ic_money_send.svg": "91e368c1d37688006636ae10bdb5b0c1",
"assets/assets/icons/ic_history_anticlockwise_line.svg": "42da46532ab47e6f17a71a2ca6cdc6c6",
"assets/assets/icons/ic_eye_2_line.svg": "ec1a2b8b948f984735d2db5458fed426",
"assets/assets/icons/ic_map_pin.svg": "44a138869832a1d6729bcd18796d6fca",
"assets/assets/icons/ic_create_merchandise.svg": "d8e7d648c374baacba14428e8a7ae166",
"assets/assets/icons/ic_arrow_left.svg": "088d7fe8c81c46c63bc8c152e96f183f",
"assets/assets/icons/ic_arrow_bottom.svg": "c95fa3bac34a807da0ca4cb05fb056f1",
"assets/assets/icons/ic_minimize_line.svg": "1ca50d037a3b766eb180ebd74ac27dad",
"assets/assets/icons/ic_danger.svg": "90c84263ff3b6d9ab0c2659505a41bb5",
"assets/assets/icons/ic_failure.svg": "fde0dbfe69d2524bc9acc6cbc6c03dc5",
"assets/assets/icons/ic_star_outline.svg": "9c1a4b165f3e9a8f6df68c0b4b311bde",
"assets/assets/icons/ic_information_line.svg": "705cfc641a972416d8b6c996c7ce4854",
"assets/assets/icons/ic_direct_inbox.svg": "e15d8e03d1c994919fcc63181b5b2811",
"assets/assets/icons/ic_live_photo_line.svg": "ac2c55440e0701f28476d28c46016bac",
"assets/assets/icons/ic_add_line.svg": "1ac38d9c390702a4a5a2760145f73bca",
"assets/assets/icons/ic_notification_status2.svg": "6f887592019554d9f298fd34fb91c6c7",
"assets/assets/icons/ic_task_2_line.svg": "a2df8fe914c7a5c8e3c90e15c079b2a0",
"assets/assets/icons/ic_sale_line.svg": "289351c70b1ef98acbe3cdf864b3f280",
"assets/assets/icons/ic_note_text.svg": "8f1a6cdb30982b600eaffd48ad968f9d",
"assets/assets/icons/ic_arrow_right.svg": "20be8b37b6a4a5e18b405245fdb44e38",
"assets/assets/icons/ic_target_line.svg": "dc8a7a4e796cccc555ed6726bb2c5454",
"assets/assets/icons/ic_link_dat_san.svg": "656ac412a9257de01379a58231e40610",
"assets/assets/icons/ic_money_receive.svg": "abd243f45322979e92835e17b43bac96",
"assets/assets/icons/ic_reserve_day_ticket.svg": "a7b22faff6e49c0420dcfb23faa62b2d",
"assets/assets/icons/ic_add_square.svg": "8000cffb9b5ad8f65f14a052606a7f06",
"assets/assets/icons/ic_radio_unselect2.svg": "a61bba323ebcab1a4b8c1975beb2b285",
"assets/assets/icons/ic_link_2_line.svg": "606c5521d8026642cf3fc0e5e6e419f3",
"assets/assets/icons/ic_map.svg": "4128d755cbed30969f30cd25d4b2b620",
"assets/assets/icons/ic_combine.svg": "7147e260213001b1023cd4804a4297ac",
"assets/assets/icons/ic_currency_dollar_line.svg": "882999539d94a43c26eb5c895c71d849",
"assets/assets/icons/ic_calendar_tick.svg": "5eed33860987c979674d8d8654e592e4",
"assets/assets/icons/ic_system_theme.svg": "32c0dd040772c46350fb74d18700317c",
"assets/assets/icons/ic_scan2.svg": "3453b19331d96454b368b5b719819eac",
"assets/assets/icons/ic_google.svg": "b820c5f5f5325dce55eee03b2458805a",
"assets/assets/icons/ic_diamond_2_line.svg": "6e26990e81fc1cc2f2a169401c27a744",
"assets/assets/icons/ic_ticket_expired.svg": "be7e8703e8943f492f555e3c07a8951a",
"assets/assets/icons/ic_gallery.svg": "ec470651dfb2adaa18c41d85f02d73d0",
"assets/assets/icons/ic_coupon_02.svg": "24945db09e3a1cdddcfaa441982b2a4a",
"assets/assets/icons/ic_camera1.svg": "606c951676a5870dc642bc943a907f19",
"assets/assets/icons/ic_ellipse.svg": "d56cf98747b681bdfefdffd99f1ffe07",
"assets/assets/icons/ic_approve.svg": "450ef61e2eabe41c59dbb604d0c4ef1e",
"assets/assets/icons/ic_rank_second.svg": "ea19457d246e661e67150bae0f94b488",
"assets/assets/icons/ic_tableTennis.svg": "48a4d8f7b9edc07a09efd23048ff6571",
"assets/assets/icons/ic_radio_unchoose.svg": "1d00612d17b1ff1475dc432d3156e919",
"assets/assets/icons/ic_batch_history.svg": "375378541cd59bb3f9d76449fd9b091c",
"assets/assets/icons/ic_tick_circle.svg": "393855039dc17d86418fcf63b1f2c6a9",
"assets/assets/icons/ic_box_3_line.svg": "ebaaeab4c32924fb9ee5be7c52023cd9",
"assets/assets/icons/ic_info_circle.svg": "51287be726dba56a68daae71c71733b8",
"assets/assets/icons/ic_information_diamond.svg": "9105645498cb2859f224a06c848b52f4",
"assets/assets/icons/ic_dollar_circle.svg": "37d7c16adb2ff4d2d6199f6fd63edae9",
"assets/assets/icons/ic_light_theme.svg": "d01735578aefc6df272c1290e36c4f5c",
"assets/assets/icons/ic_clipboard_tick.svg": "5442147c2414195ae01d536daae357ba",
"assets/assets/icons/ic_trailing_error.svg": "1313acf9d9647a9c9b9901d47eebb10e",
"assets/assets/icons/ic_money_insert.svg": "0f8b949aee0e141d6deb5261cd922e10",
"assets/assets/icons/ic_user_2_line.svg": "5444f996c8e9dfd7ec17ea5e4bda73b7",
"assets/assets/icons/ic_translate_2_fill.svg": "30842b0246336aa0d178e07bc8f2f30c",
"assets/assets/icons/ic_user_3_line.svg": "d834efc4726d072a9c23e4fef6fff4aa",
"assets/assets/icons/ic_document_line.svg": "24adc918ace699e90c9afc8c70f4e7df",
"assets/assets/icons/ic_reserve_fix_ticket.svg": "d466ff4f0bbdc5bf23f1689d52e4059e",
"assets/assets/icons/ic_copy2.svg": "e3448871139494db90f87295a2eb6e73",
"assets/assets/icons/ic_close_circle.svg": "39bad4eaab1352d4b79306a82aa3bf3c",
"assets/assets/icons/ic_action.svg": "d1fa025d388f521783212b50ab8c3738",
"assets/assets/icons/ic_distance.svg": "36cca8327777f2d70af40c723f66bc73",
"assets/assets/icons/ic_badmintion.svg": "66ffb015ee548acafbe6dae2eddb5f3d",
"assets/assets/icons/ic_checkbox_medium.svg": "975f81ca477c768f1c9473f61e64c3e3",
"assets/assets/icons/ic_location_line.svg": "fa12f6800c1eca2ac9d89250d9dc26ea",
"assets/assets/icons/ic_layout_7_line.svg": "62f4ab28dc129fef6c151cc4f194af75",
"assets/assets/icons/ic_function.svg": "7ea6258afaa8ee5104736f50e6a36ef9",
"assets/assets/icons/ic_card_remove.svg": "ec8893bfc92113a8b6339a0528b9d8c1",
"assets/assets/icons/ic_warning.svg": "af6286303c7f2392e6a6b131d248eb5d",
"assets/assets/icons/ic_notification_bing.svg": "5a4a514db9c8df96ac2d0e3b234f6b07",
"assets/assets/icons/ic_call_calling.svg": "9b0b934e1912cdb32bbdce396e2ca1e3",
"assets/assets/icons/ic_ticket_line.svg": "8eb6e321aeb3304601c9bff4f2dd8968",
"assets/assets/icons/ic_food.svg": "d27440bf0fabb6a2b3a311194a141a36",
"assets/assets/icons/ic_menu.svg": "6539ecde0e8b516349797d6a0768375a",
"assets/assets/icons/ic_bill_2_line.svg": "5ea2fc775a3dd652bcf31ea8f1d94846",
"assets/assets/icons/ic_notepad_edit.svg": "c25a34f3c85ac3421b282e3920cb51df",
"assets/assets/icons/ic_check_line.svg": "08075ed9d10751b7c6d5e3ef026535d2",
"assets/assets/icons/ic_user_search.svg": "509cd6189eb61361c6854ce5b806d012",
"assets/assets/icons/ic_add_circle_line.svg": "01f3131facfcf3cb5a73d98a7ac01588",
"assets/assets/icons/ic_more2.svg": "f2a8fa7aee6c0279df6136c4993020e6",
"assets/assets/icons/ic_arrow_top.svg": "d4e3bf3ae7ef9f119df6b9db871cda20",
"assets/assets/icons/ic_sell_not.svg": "7418551eaa095b4d03b981b8cddbf002",
"assets/assets/icons/ic_pickleball.svg": "d7d4c2069f03e2d9663d727500b35593",
"assets/assets/icons/ic_forward2.svg": "be2d06d4b14fb96da2ffe900aaa8a574",
"assets/assets/icons/ic_ticket_01.svg": "103172dfb3bde5107eb7d46b9823f88d",
"assets/assets/icons/ic_document_copy.svg": "6c1c2f1b24d232c78c41eb16add7109e",
"assets/assets/icons/ic_user_edit.svg": "e391e84d77742781a3cca6425412ef19",
"assets/assets/icons/ic_profile_circle.svg": "02c77528dfeda2fa37e6413f9e951cba",
"assets/assets/icons/ic_person.svg": "d8f57603b2f197977ddf42b6ebf32582",
"assets/assets/icons/ic_copy_2_line.svg": "d1c8111a7ecaf31bf793f6fb43f8b96b",
"assets/assets/icons/ic_playground_line.svg": "47ac2beb5c8d9ebf82d94b0b3a9a0416",
"assets/assets/icons/ic_sell.svg": "33dc23191d7a7e0e4924551a7ea0d84a",
"assets/assets/icons/ic_pig_money_line.svg": "c6fe4116a9264dba27c283da2800842c",
"assets/assets/icons/ic_cash_refresh.svg": "bf4f1422cb87b742d5cc53da156d9b73",
"assets/assets/icons/ic_profile_circle_2.svg": "a7996d948cd37ed5b6dc9f9477efd3ec",
"assets/assets/icons/ic_receipt_disscount.svg": "2f2155f87cb0294508de0d579bd8e019",
"assets/assets/icons/ic_checkbox_choose.svg": "e30a53ff56a5c39fe3aac8b5a8b2c29f",
"assets/assets/icons/ic_computer_line.svg": "7d96ad2476d4b0698510355af00fc7d0",
"assets/assets/icons/ic_golf.svg": "6211d42327c49d3ac50175b5a45baa27",
"assets/assets/icons/ic_edit2.svg": "1d0b576e254a9955ad4e54d630306d97",
"assets/assets/icons/ic_coin.svg": "550bcb4ac1ff6e5fb228afbb3e5ca102",
"assets/assets/icons/ic_bank_card_line.svg": "653bc55333087dec46afe2fc9e325626",
"assets/assets/icons/ic_button_calling.svg": "ba40dcc790a0357b58d58e7b82d7bfdf",
"assets/assets/icons/ic_sort_down.svg": "3ec1ff9304998307d457916f05af3dbb",
"assets/assets/icons/ic_timer2.svg": "fe082d01b2c680de05b8a86ccc836b9d",
"assets/assets/icons/ic_currency_dollar_2_line.svg": "27b822cc6fddea52fa0300d238c7cee0",
"assets/assets/icons/ic_profile_2user2.svg": "40bc217bc819a9094a415990cb14e566",
"assets/assets/icons/ic_minus_circle2.svg": "5ec502ad80815e70a4909c52331693cc",
"assets/assets/icons/ic_money4.svg": "98d6b3f067e236cf71cba1e233721de9",
"assets/assets/icons/ic_chart2.svg": "1493ee3b2de017c429e0faa080ec114c",
"assets/assets/icons/ic_camera_2_line.svg": "6ecba9c5dff814b5803d6cf76a24e430",
"assets/assets/icons/ic_more_1_fill.svg": "b46dcd0248de9446ae1b88b0ae704dcb",
"assets/assets/icons/ic_scan.svg": "4c9335a2e2b10df34b189b9a50adbc42",
"assets/assets/icons/ic_money_change.svg": "fa3e6947fcab17e4e31ee1013c79e127",
"assets/assets/icons/ic_tennis.svg": "bbe75432a7a016804a5c0b8508ed832d",
"assets/assets/icons/ic_chart.svg": "28772cc1ac087f19fd04a1fa3114e3ce",
"assets/assets/icons/ic_setting2.svg": "68e13c1170d5bbcdb27536dad25ab508",
"assets/assets/icons/ic_box.svg": "0f624edacbc6e82593ac77b658b99f2b",
"assets/assets/icons/icArchiveTick.svg": "e3558af258c3efc82ed3b7da0be818c0",
"assets/assets/icons/ic_chart1.svg": "4bb02985ee0f3053d288266f26667501",
"assets/assets/icons/ic_lock_line.svg": "ca42c03ae7d3a571898732e38f171ba5",
"assets/assets/icons/ic_search.svg": "5d3d5f4a0f118a329a171c682130a8a9",
"assets/assets/icons/ic_profile_2user.svg": "a90fbcb84e8b73da3ea0370498969aa5",
"assets/assets/icons/ic_receipt.svg": "69bdfe8ed44a26beec5bb185c89065ff",
"assets/assets/icons/ic_basketball.svg": "84c6e3b2358eec7719c622f12434e52f",
"assets/assets/icons/ic_gallery_export.svg": "ea08f1dd709e07c02ca613800861f48e",
"assets/assets/icons/ic_more_not.svg": "53680becab928470c3bc0bfa7bb129cc",
"assets/assets/icons/icRotateLeft.svg": "1d395ea7fc07d62f7fe760058904d093",
"assets/assets/icons/ic_device_line.svg": "c5fb31917cb2e04d9e1c802a4dc95c3d",
"assets/assets/icons/ic_time_line.svg": "e7ff69db211e7c3f0484020e9987eb7f",
"assets/assets/icons/ic_read_all.svg": "ba4cbc4fd9b2de4151bd454b861b4036",
"assets/assets/icons/ic_sort_ascending_line.svg": "d3f6971dd1db1f367a4e6ee99e3acde4",
"assets/assets/icons/ic_england.svg": "1688c60a6007cae0b4154f4efff91bb8",
"assets/assets/icons/ic_home_not.svg": "f16945b7d7eac835ae806869fe24046c",
"assets/assets/icons/ic_calendar_add_line.svg": "924eb3a4d1cf8e295f3ea991faeaedf8",
"assets/assets/icons/ic_shipment_entry.svg": "791bbbb52a05d5d3c99776e22b37a775",
"assets/assets/icons/ic_radio_select.svg": "d449885b3d4fefa03b5dc8db8916f970",
"assets/assets/icons/ic_receipt_item.svg": "8b9ea6292bfe4528ae045a0ea25288b9",
"assets/assets/icons/ic_close2.svg": "823e941782ea5f63da104e83ccf2db1d",
"assets/assets/icons/ic_filter_search.svg": "72f373dc61244933d39096f67a0f8fb9",
"assets/assets/icons/ic_star.svg": "a6eb37d46d7dc1fb48a656faeb2f560a",
"assets/assets/icons/ic_tong_quan.svg": "595ecdb0c4ca0a6d433ba45908dd5fbf",
"assets/assets/icons/ic_bottle_line.svg": "c16250c9756113276a964c088b97931c",
"assets/assets/icons/ic_tralling.svg": "65d4f75974d0eb1d62468323897a205d",
"assets/assets/icons/ic_chart_pie_2_line.svg": "c3c1c019345af0d10f8aa75f888d043f",
"assets/assets/icons/ic_group_3_line.svg": "e4ad62445444f405fa16eaa9df7ba985",
"assets/assets/icons/ic_logout.svg": "ab8e86755f3d5175f90802d4001cab8b",
"assets/assets/icons/ic_more.svg": "f4e30e9cdaa015613a5f7747fa39b28c",
"assets/assets/icons/ic_clipboard.svg": "ff0fc73c99c532a96a9ed9901503f0c7",
"assets/assets/icons/ic_ticket2.svg": "2c5ddc02de9b57b62a663669640bf793",
"assets/assets/icons/ic_clear.svg": "fed3bdb7c8e1fe6de629130b15e5002c",
"assets/assets/icons/ic_notification_status.svg": "055456aa952b7a8bf3fb7408ccd12c9e",
"assets/assets/icons/ic_add_circle.svg": "ff57ccea1cd5dfcf1cdfc930c8861735",
"assets/assets/icons/ic_receipt_add.svg": "613f52b2b77621a32d1cfef1ed34f7a6",
"assets/assets/icons/ic_don_thue.svg": "5ea2fc775a3dd652bcf31ea8f1d94846",
"assets/assets/icons/ic_printer_device.svg": "34cb8b154cd7759342c5d5599096a876",
"assets/assets/fonts/Inter-Medium.ttf": "4bf75147230e93108702b004fdee55df",
"assets/assets/fonts/Inter-Light.ttf": "3ea4007efbbb2f30c2c73275eef5c2b0",
"assets/assets/fonts/Inter-Bold.ttf": "a041f18d0d0c67b376bec0343f7c0cf0",
"assets/assets/fonts/Inter-Regular.ttf": "fc20e0880f7747bb39b85f2a0722b371",
"assets/assets/fonts/Inter-SemiBold.ttf": "70c03908b3ab82969b38ba14745f3a54",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

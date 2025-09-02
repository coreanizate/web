'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ffac146ed33165589188b74d92dac1ae",
".git/config": "2c13fe66977a1c82320a6842bd86d4cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "29cd00f243784cb4efd084d106c508e0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "65b7820474e1cb5c759b94de0869f811",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91d844753ec43f3ce42d2c47504b3789",
".git/logs/refs/heads/main": "91d844753ec43f3ce42d2c47504b3789",
".git/logs/refs/remotes/origin/HEAD": "ebac386ee74f2a83e51f4af252822ace",
".git/logs/refs/remotes/origin/main": "f35d28d9fa13f33a7a80f6936957cdb5",
".git/objects/00/595c26a159533ed455002ae75777da77942a9f": "4f16370666619d360da509971205a8e3",
".git/objects/01/211857345dbff9a23aa87e0b7354e5d7c968cf": "075409c5bcc081caae8957f805b1b6d9",
".git/objects/03/b8a409fb5d11b682e01dcb90196f276047976f": "b1bc724df3f4397edf88e65f8c618dd8",
".git/objects/06/c81c002852ca2ac36bf8d8b25ebe157d48ff8f": "d6fba3ed1f2507c5f5b1c8ff23e6e684",
".git/objects/0c/767dc26eb114d8773fc6458394922c0371324f": "daca52f286d37c9f30f0e7247839880b",
".git/objects/0c/d8fb72cccb3530753ad888bf470b2d0c2bd2c4": "9ecca48c2694e24d531b16e3f3fc619d",
".git/objects/0d/345b5e946904c9402e901b2502a15090b22ded": "5da1927eef704df3fa1cdd1e9fc90564",
".git/objects/12/5c3cdaa9325559e7c0434bcd51940cfed88ba3": "bf45152de34c3a1b9b1914fa85e3a7da",
".git/objects/16/0d954e22362bc57f8d53ab1e49ac1b5dc6b607": "405ccd48361b8323f2214d5d2c7828f8",
".git/objects/18/7663a36380ac8012837067b354989a25a0c538": "ce14be9975eabab1a30229b75f62ff8f",
".git/objects/1a/e1b3860bc41d6f16ef72225a128f326f6ea8b0": "95fa99c645b85f4388c23726f71f5a93",
".git/objects/1c/a4e66bab8afa6cc644e54f248d37fd32360237": "2f9a571ce1fe71bfdf92709b080f9816",
".git/objects/1d/328efb2a265ef6a8f57890c5260a263a15e779": "546c4f316ca2771c8cda67f52f5fe61f",
".git/objects/1e/91bc5ce2822db40c94c4e100c184ed7a4b8765": "177f6f9581179fda0b45fa600ba4673c",
".git/objects/1e/bde91e7c9db0cea7822feadff1fa066b23c165": "6e5909a909f962f0fdf0556ebd384efe",
".git/objects/22/141ba3afd94c1d8b6c1544cfc04d0f37f412ef": "a5db94b12f4a2700170a8ef03498dc30",
".git/objects/22/256fefe5efa6803b281e3c9683eab6e9d51a72": "bfa70fa3de54926a2f540985161b85fe",
".git/objects/23/1fc4611e224258a25ea6a1249eaf0ce595301b": "86b4b8f4792c53b6b03036dfe5f66b35",
".git/objects/25/06b51e35c3e9e5811075450591d717318d7e95": "f97f3614ce328773125f7913cb90aced",
".git/objects/25/f470ed27b4023c8542b8d937cb182dba1e6941": "28651710241ae7c13402fc0ba20c4861",
".git/objects/26/79afc54d7dafa6b72f5c7e673379076b1d9f7d": "e75ee7167f63fe830e584e71f546ef37",
".git/objects/27/9efc0ce653e6b4785dd5138dab5eef80fe4722": "4163391e3b6f550558f0919f7023e2a0",
".git/objects/2a/d0fd200e243027b42a2ae4697a4f9db08d7e70": "1eba32cc7f9e2e78a6cea8df4e5aed53",
".git/objects/2d/a8ffce577d4cf69beef538ecbd3a70769540d9": "1f0f7dea58dcbc1794caf70ea172e51a",
".git/objects/2e/bb8465d72cc7e519e741099a569ae7f48e8e0a": "4880f8ae2a175b0450381f0de114fc98",
".git/objects/31/7d3a04aac50d4c5b74e17b9f3be682deba985e": "5fcb80c7b6dd1c88f47fa9cdfadf902e",
".git/objects/36/a6cd7594ae0fdbd82d48501f3a0dbca65bce8d": "aa6639feb09eef37d0e8e2b2de815b39",
".git/objects/3d/b46e85c48950cbfbe42e8b4c9781dd9a13a55d": "5fd6221df16c724a32af4892d313f406",
".git/objects/3f/73f7009027ad4d55a6b9027b1c1a98ccbf8904": "ed091a710e5a32907c782e994c71f0e5",
".git/objects/40/41e9061eb8b7f04b99c2ebbfed331b0d2ef8fe": "784428d9d205166f74b79a7edf82f1ae",
".git/objects/41/e9d7bc26a004d816f295aab8e873c48af67ee4": "e8f45a46fd17ca55596696796a1e91be",
".git/objects/42/a088a42d51d7774ca55f5f8915f12800c41410": "12d544fe4b3daafdb12dd06c1c254dfc",
".git/objects/43/85703e94577ff87583a5798330ebb69093f434": "a32a78db61172af75909124c061c031a",
".git/objects/43/8ca574a18d2e3f367776d5e9f3a462b385baf2": "0e21c552113c1629de40a7e83a0521de",
".git/objects/47/096d829ea78324814643c259b2700c97f89043": "c200c7082936d178e977fa769d16d11b",
".git/objects/49/5db8c336a41c017e375fd34e369a400651606b": "b7e74483b4db5032ba694280b4c614ca",
".git/objects/4b/31c1ae772a02fe9f76866ae285afa2f9b7ffb6": "cc36ead4c1530b7aca3bcaf72f5f9145",
".git/objects/4b/9286e6d234df315eabcb6cf9c01de1c9be3b0a": "fb055ee0e85cf1b770c81de09dbf5785",
".git/objects/4e/aa70f0ec468275ca2ca4415efba62e2ea2b74e": "a2b6e222bf6df05715e041c7661486ea",
".git/objects/4f/1e1a23723ef109f475b1218e63550e9bdd63f6": "8ccadf4eecc5d964e400e0ecd8603b0e",
".git/objects/50/63dab0e2e1fa36277808b2890ff9b9117fe760": "022f8bd337a20f4232a9c76279f020b0",
".git/objects/52/cb5190dd4f34593050b6f14bd120760d08497c": "e1b0737245915270d743bc47d1c066f6",
".git/objects/53/beaf29583f32c556dfbe41205921de8d7e38fa": "5bc4674522da37099599dfbce3f473af",
".git/objects/55/0e0831df5ddccada1c82f3e19e61e0708b639b": "56d3134cdaf7f41c2b95e6830cf3298f",
".git/objects/55/ea3330ecb4d79f30f57e21611628221b82db81": "462ed5a264341773685546c20ccc6e94",
".git/objects/5f/4fd7fc448de5be7fee098f8e745cf3d502029a": "23abce825e3a52bcb26bbabdfd3c9133",
".git/objects/60/eb387efc15486436637ed1c5c84b1f7ed58be7": "583028fb160b5d4a9d3d889bb19307cb",
".git/objects/65/484eef8e2e5ebae22465b726d1964e5d73eb51": "5c89d74cd1317be2ed13360481280f1f",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/67/7b8e9172470a431538ab7ba4a7bbd14fb73a90": "74842e55e737445bb0fef632bef18fe3",
".git/objects/68/e6de0a9e24af618916ccfb37ec60480fe09b22": "ff9617e6b95aa2e2d59b6c2ec44ed58e",
".git/objects/6c/813335b492e540f2e34c0e1a1b21f8f9dbd5c9": "c3a74a8148fac39f81810292b6b65ab1",
".git/objects/6e/0cacebbce4ef300ad11899c3a49cb25ce439df": "6d2589546e7bea4acb6445a893851215",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/70/04731411e4163d6110bcd63aa8c0d8342104e9": "802c182b0d7cad4bf2006534f5d365b4",
".git/objects/74/ab489c96b0feec8339f7e5e2dcc304924b172f": "cff72730e131c385537fced0f47c1fe7",
".git/objects/75/68fbd186f4a67314ec03d52160955413e1567c": "ae809b9d3d9b2d5f03a946cbbcbafa8f",
".git/objects/76/11fc310e0279e0c3c3d358eb1912ac8af32fe5": "de1adceac9ec27bd4948fb6e1383bd50",
".git/objects/76/352a0dd9687b98b0ef00ff39cef5e2359ce53f": "5f411cccc81e755dfc44d39d76cadfc7",
".git/objects/76/7f2220acba8772b1c37cb92d3a359ca6ff5d97": "a8b7058471088a362045fd47d5488a46",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/79/3a2b8fb686f7a8cd0b4e6be441d1523bf5ca23": "e880e1873d8cc19aea206842fd0cd77d",
".git/objects/7b/1c61abd4e80706d3cf267908aae98b86f405e4": "bcce9261ed09ba9cd252d8b51cc8f891",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/6a92120961ff7bc0248b63902ec2a9efbaeb52": "72b937597e53a7967452dfdcd059f54f",
".git/objects/7f/067b015fe116bf8acf191249f2c8803fe4c3be": "46772b3ae623200d6a063e3360bc4d5c",
".git/objects/7f/cd6f14cc1d77f70c58e2ca6173276dd5671b77": "1587d72b259880d9763af629b259a69a",
".git/objects/82/e1d22f4a3a3dab52246cb6a50068262a259e34": "0c6aacc9420e4cc04c8d1e6c3f287a46",
".git/objects/85/eb95705ff46fd23e45c6bf17fd9d9aecbd4512": "74ccf353d0b224a22d055b9393dcb85c",
".git/objects/88/065caa5dc5e5bfddee7afb27d9157c0b8e26e8": "d1720a6a0301a9d06d2339b02935b3cb",
".git/objects/8d/dc48977e2e66ccbae12368262f4a63d4238ab1": "dea0a42d763e5272460389a46b2affdb",
".git/objects/92/b05538b6a4540f520fe68465f3ac3f63812d40": "dfd8c2f28f05b4a5006e3cd790405957",
".git/objects/92/f5be0f44072d04b10798c21885737eda58621f": "d7e0da38c588411a043c84ea7668f24a",
".git/objects/94/ce1a7ff159d0ab8fa659a08b6acf373c8a174a": "68e48ad1a22a75278f38697e91d160e6",
".git/objects/96/22e819011e1d2f933c2d0ce751b4bf8009e6ea": "015a2a4bbd15d98ecb79884084a7e9c0",
".git/objects/98/89dbf422426af856a94a0847a8fbac04da231b": "85a96c62095198fa56a179376d0a37a9",
".git/objects/99/ead7260fa6704dc160e9c2a2d9a2cf0d13e5ec": "ce2c1a9b06e25184fe2e18382611087a",
".git/objects/9f/ab77ffc963ac1e9c201029d1aa32eeeaf7bf07": "451a6375c02bf0ead7eeb71e3fa64f25",
".git/objects/a1/b48e1e7d76093d4d1f97b876371651ee8da083": "9b4c63ae53d1c7260abee3a450c1fa63",
".git/objects/a1/db30b52372dea83c376a9f7f0282cddcf5f848": "f52f200c642007a82c4cbe0612be8624",
".git/objects/a3/b4562a15a5679eb9d0cd4e9dfd4939091cbc87": "7fa623c5995080205428d2f82226e2a4",
".git/objects/a5/6d5a1f851a1ba8e8280b248b1c6d18c205d502": "accf570157d009244e879e7652c5d5ee",
".git/objects/a7/18c1657762c0c37ad6bd6c0fb96e1383764540": "d12fbf8a1f7d2f7440b7ff80d3843fdb",
".git/objects/a7/1e4a842a68ff9a876cf5789c61a726c2e1384a": "bcd2242e8b55936be6d03eee958695ea",
".git/objects/a9/cb171c24dd9914f29be0e421a2f33e16570cc0": "5b8a87939e4981d3222f1792f776644f",
".git/objects/aa/6d9427456911886c51026f30343a8e3f18e050": "569d55be703ce670aac4fae8053d207f",
".git/objects/aa/d2dddaf3ae22539761c95ded891f8cc151797e": "d8af8e608fa481ea24b307811bbf63ed",
".git/objects/ab/375a4d92241bb6e4f7619159953d2cd03828fc": "ebe31d16266ac3f4ca8b5da1fd8c6853",
".git/objects/ac/f4da8163b5e3991f6eb7fd5ea424d4b153ed0d": "ad5740a3e1917ad2ddbfe2811b6d0cb8",
".git/objects/ad/252845c5a9596f69932ad6e82b00c7ecf8dbd0": "eece9e968f32b46730367cea53ba6116",
".git/objects/ad/658709d9295d0edc99dc978b9dcdebc6a5b357": "c0197c1f2faee8aa0eb90d98cd716e9e",
".git/objects/ad/beb507024407ee7ba33b39e64086be5ffd5b9c": "e5dc7cb31b65094755dd86c509b54d51",
".git/objects/b0/ad5140af04d56ec8c1b6b6fdf8f3329023aead": "bdbeed556dd4ffad71c4ca4720507d08",
".git/objects/b1/a4867fb27ed5b93f4dee3707ba1161a3306251": "ae1d5f438b7bf49f0172a7a57457b5c0",
".git/objects/b3/8f48d904a8f9fceee71fe1869c35a8577cbb31": "b26df56b9fcd62732fee9b2269b5221f",
".git/objects/b3/e6a7cc8d1eda6261a852cd858039f8eac5b01c": "7412cbc2437ee7032adb659c7d188317",
".git/objects/b4/7387f2fd2aca3c9909393bcb57ae03c1b42256": "edbe9b9a9423bff9cc5c13b7fe5bd96b",
".git/objects/b4/75591ead7bacfd73e807f84383b70786a5065f": "8bde41d1574f1324f33f9db3e4c68f5c",
".git/objects/b6/d56169e3022a25b4dc527369b5241e1a4e5da2": "30d8e7c2c85484ddce14536655914958",
".git/objects/b6/f899af280862bb2536b4a4a4cd9328c65e00c7": "326d4833f6fba8b2850af45ea2e51475",
".git/objects/b7/2d4c42822e07f5198971acf4ee01fd8f0beb6e": "be62101b8cbe2389dcc546709a07b155",
".git/objects/b7/8e3cffbfbd71ce7f0a59d0158bb093d0c2ecc6": "83d579fcf013950c6e2fbf9ff69aae67",
".git/objects/b7/92c283d870cdf8fff48dce19dcfb3d0c4fcdc7": "a3d01183e9080db4410bc2c6ebf43199",
".git/objects/b9/2dd4ef11e9f71957a281c56964406e51c894dd": "b9a65b28c2d660bf8fb1fa5e4c75536a",
".git/objects/b9/5b51215751f83bbe5186e9b84130e8c366ee09": "cecfdab3a30a24f7342757cdbafa1a9f",
".git/objects/bd/732fff128f7ada12fd74d85c7b015ddc39e7cd": "d85bbf9913e796183501cf1fd1695000",
".git/objects/c0/43cfd16193a13e80af3fb3eb9dd2a61e8fdb37": "a634d541b90534df201b45922820a932",
".git/objects/c2/349feb8170c4586f7b6c686159b9a306748b9d": "8b3fb7364b016f58b3f2900331135a89",
".git/objects/c3/c5867f1bb4f49e41c07e9d6c41ff5d5fb35060": "73a7a72b5bc9b6a733765a48df8f1770",
".git/objects/c4/69e83c884b9b03cce7a78ae437df1ccab33e9e": "24e95165758692b8857a38cba2955fca",
".git/objects/c5/28e28769d6f39b1b74edff0762556dbf6f8315": "8734e1fc7e2f6fd7f2f9d88f94294f13",
".git/objects/c7/7710369cf72c26ad06e6d279e80750e935ca81": "c88a39a0af0f564b82388a7b1277e0f8",
".git/objects/c7/a7a81b036c5477711824e926c1b3acff38f220": "ec9c579b94637fc6b6e3d89a8b1d1622",
".git/objects/c9/4a1fc143eb8ad327f4b493fe117bfa96656cdc": "1a69200d8a1817dbd4ebbec7b6e057fe",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/940d754eb7a8e92c7bb1a3b0f98ae171a35d88": "a83824b2808b825e936ab4343b7f1dac",
".git/objects/cd/2731ee34217298d7b6f8b185813cb5f3ed27a3": "6947e6ed3baadeb1f5ce0dc765f09631",
".git/objects/cd/d780ff8d554ec68ffbee09fe8c5039423ef2c3": "f2158501eb4f2ce6889d5f1d71fedd86",
".git/objects/cd/f02939ab2066bd6185501473b6dc99eba2f4e1": "8fdc78545b3a09971875d18f7a6bda68",
".git/objects/ce/54b306ff138ae995f69ad97dec3bce958e19d7": "fcdaabd600e3b169ea3906985c95ae7c",
".git/objects/cf/ffb5ed3eca4dca7960857ec9f382cf4675ce92": "a443d043bd6c19d38f1a7848fce36891",
".git/objects/d0/d63c07bf5ea631c33e5f16b7c4d4600ac7981a": "31608da93d583d07a075936ab9579272",
".git/objects/d1/8076e47e93317936e06e4afde8048ab9ba288b": "9aa7302e074791393115ee2c20d8a7f8",
".git/objects/d2/1b5bc682c9a8d83a0b85c632dd7750b336bf20": "18fb38f20527982015f6b86297730a1d",
".git/objects/d6/c8522d58352948aa1e27445d96bf3f65a7c6af": "add727ac4403493daa45c8c49d709eb8",
".git/objects/d7/3557fde1b3910d6983c065f79df12d35047307": "ca6044812384ec31a2c1707907e63b11",
".git/objects/d8/429a6be8987763dfe95f877efe0f17fea3f504": "9d12921d89581ff12442997d36e6d9d9",
".git/objects/da/8ffec36b427436d20d0d7cb1e5ce761c53e8de": "7a614833a279d51790895537523bdfe5",
".git/objects/db/3b77c95b5e0dea4c653479a9ddc63ffc16d069": "26571745c4ee1513a6adf93b1615a5da",
".git/objects/db/b92821b45768b47233d3e32830dea72e9d8169": "5d6642b7709389592af2805289b54485",
".git/objects/dc/303389c156beeb0acb610d5d4f2d72ec544c24": "b5315e5a09c6ea48a01c81ba28fbeedd",
".git/objects/e0/0d4cd82f5695679bb5fc6da1d23a332f44676c": "34c2f5a93a68563127c52e46561aa3f2",
".git/objects/e1/ffaf93e4fc96a12c224132f6ab527a6e4f7308": "08f8f390c0e5832bd58041f3ae79e8d5",
".git/objects/e3/a15151b715a3a404d36004d519c2090dff83af": "17bf8b9f0aa7a9b99cb7f05d4d78687a",
".git/objects/e3/a8af0ea404de8afff43327cfa7affb764d2d91": "a0f87ee5b5e10e1854b89de868a1e995",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/e4/99ee779c3e657cf9f76d09d2cf39d39631093f": "833f7b8cb2bee24213a1f7eca10229d9",
".git/objects/e4/f746bbd97b647140ae97533668f8d36c3e8a1a": "b9e59cf547d91e20262bd5cc34305175",
".git/objects/e9/d3b0b1dde8386bb23ba3eac9a89464e615ecc8": "7654352b9a85d19655d34e1b1e95f8ff",
".git/objects/ea/cd85cff1cce88ff421b33382f9c7f2f57d9f2c": "00dad0d6bde6176c6429d005738eea06",
".git/objects/eb/7d4e365867c1d99d85703c3f391c8a1f7c7160": "d3368b148ffc2f69ba25ef14b9f06cb1",
".git/objects/ec/cff9c2f11c73dc42fdfd23e80b7a693239ab31": "8edb07fddf6ff5831f89e42f27018cfc",
".git/objects/f1/cff4b0b603793148e290f8c385c86b4c0c0a5a": "055f57d210c59b9734edf543e3f34f48",
".git/objects/f5/4d52ab390bb257148c6c481f5059c5155f24c3": "667baec6456768f3707abb1863779439",
".git/objects/f5/8129dac42ed9a393ade0ccf433e19c269b1edb": "d6d8c5bff51dc1b5dfe35320105adee1",
".git/objects/f6/3eded6517fa4e962573e4b4bd141081c48037c": "cfce097523dbf7cbe648044c66db7bb5",
".git/objects/f7/33b2fb71bae7df86e33f1c2e320fb39dd0f7e2": "286129ddb42dbc679840aa26b930950c",
".git/objects/f7/a86cf088f440784a72ed2a47e49a643655d614": "fb82421597e736e4231712735f35d508",
".git/objects/f9/3fb478db1b0a08824fcafd5ae58b805ec23f06": "6b70ae91d735f1e8160b3f43921748e5",
".git/objects/f9/eb62fa3a6d6cb9d1819c7b967c20a1f82eaa01": "89c420cca680e22955808afffa419db7",
".git/objects/fa/df9546e1dee2baf5ca2468304787883fdf289d": "5f4113d797a28386a9cd1e0f6a8def56",
".git/objects/fb/88ccbf2a46c72c3e9c5fd9dd9021a0ab33e1a3": "8e8a8a066ca6bbee2aed5558733251db",
".git/objects/ff/7e6722dfe54b4ac8baf9d9b9f410ed8c268efc": "4a8bd8f45dc39532f024e367665e3009",
".git/objects/pack/pack-01d3db2699ae9504f56b53975a95c4628a8e0b97.idx": "26e6791238f980d39fc0a56ee0395b8e",
".git/objects/pack/pack-01d3db2699ae9504f56b53975a95c4628a8e0b97.pack": "8dc6aefe29b7d0b3c26ba6db00c0c802",
".git/objects/pack/pack-01d3db2699ae9504f56b53975a95c4628a8e0b97.rev": "27699f31c32554c683c6e350bc9e1240",
".git/ORIG_HEAD": "55608d62ea6a11d90dc534ed7c9ca546",
".git/packed-refs": "d3cb51fea325183d13f6dea17aac28fa",
".git/refs/heads/main": "061017dfbe0be578258a338f8a0b3e72",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "061017dfbe0be578258a338f8a0b3e72",
"assets/AssetManifest.bin": "0a355db5c2919a6a40ac5a8f7c4a9c5e",
"assets/AssetManifest.bin.json": "6695d0279bc84e31806538e0449571c3",
"assets/AssetManifest.json": "0963f26d769a5e99602718dcdc4c5bce",
"assets/assets/images/logo_ccg.png": "9f607020dfbfaa694074432f687ce32e",
"assets/assets/images/logo_ccg_alpha.png": "844550370cb001b97e35edc915d24e8f",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "0c14923205a7ff2882f7a711082a2b29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9821d317eff9bb9cef89a8a239e389c6",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d294bbf9b21bf8f2fb22ccda16b07208",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "22ff29acfea8e58fa9c84db7bf0123dc",
"/": "22ff29acfea8e58fa9c84db7bf0123dc",
"main.dart.js": "824ddb6d970b4c90375b6a8c10e43434",
"manifest.json": "dda6d6d811adebaeddb141d0a5d4c1b4",
"version.json": "82bc4730c0b69ea7bb795b3b59c2c496"};
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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
      tr: {
        translations: {
           'Home': 'Anasayfa',
           'Agents': 'Ajanlar',
           'Gear': 'Zırh',
           'Maps': 'Haritalar',
           'Weapons': 'Silahlar',
           'Valorant API Documentation': 'Valorant API Dökümantasyonu',
           'Agents Information' : 'Ajanlar',
           'Gears Information' : 'Zırhlar',
           'Maps Information' : 'Haritalar',
           'Weapons Information' : 'Silahlar',
           'Agents Detail Information' : 'Valorant oyununda oynanabilir ajanlar gösterir. Bunun dışında ajanların teknik özellikleri, rolleri, becerileri ve oyunda çıkardığı sesleri içerir.',
           'Gear Detail Information' : 'Valorant oyununda kullanılan zırhlar hakkında bilgiler verir. Bu bilgiler zırh adı,açıklaması, fiyatı, kategori ve kategori açıklaması gösterir.',
           'Maps Detail Information' : 'Valorant oyununda kullanılan haritalar hakkında bilgi verir. Bu haritalar karoselle gösterilmiştir.',
           'Weapons Detail Information' : 'Valorant oyununda satılan alınan silahlar hakkında teknik özellilerin dışında vucüttaki yaralama bilgileri de gösterir.',
           'Cost' : 'Fiyat',
           'Category' : 'Kategori',
           'Category Text' : 'Kategori Yazısı',
           'Fire Rate' : 'Atış Oranı',
           'Magazine Size' : 'Şarjör Kapasitesi',
           'Reloaded Time' : 'Şarjör Değişirme Süresi',
           'Head' : 'Kafa',
           'Body' : 'Gövde',
           'Legs' : 'Bacak',
           'Sound' : 'Ses'
        }
      },
      en: {
        translations: {
          'Home': 'Home',
          'Agents': 'Agents',
          'Gear': 'Gear',
          'Maps': 'Maps',
          'Weapons': 'Weapons',
          'Valorant API Documentation': 'Valorant API Documentation',
          'Agents Information' : 'Agents',
          'Gears Information' : 'Gears',
          'Maps Information' : 'Maps',
          'Weapons Information' : 'Weapons',
          'Agents Detail Information' : "It shows playable agents in Valorant. Apart from that, it is also covered agents' technical specifications, roles, skills and sounds they make in the game",
          'Gear Detail Information' : "It gives an information about the armors used in the Valorant. The information have gear's name, description, price, category and category description.",
          'Maps Detail Information' : "It gives an information about the maps used in the Valorant.These maps are shown in carousel",
          'Weapons Detail Information' : "It also shows the injury information on the body about the purchased weapons sold in the Valorant except for its technical features",
          'Cost' : 'Cost',
          'Category' : 'Category',
          'Category Text' : 'Category Text',
          'Fire Rate' : 'Fire Rate',
          'Magazine Size' : 'Magazine Size',
          'Reloaded Time' : 'Reloaded Time',
          'Head' : 'Head',
          'Body' : 'Body',
          'Legs' : 'Legs',
          'Sound' : 'Sound'
        }
      },
      de: {
        translations: {
           'Home': 'Startseite',
           'Agents': 'Vertretungen',
           'Gear': 'Rüstung',
           'Maps': 'Karten',
           'Weapons': 'Waffen',
           'Valorant API Documentation': 'Valorant API Dokumentation',
           'Agents Information' : 'Vertretungen',
           'Gears Information' : 'Rüstungen',
           'Maps Information' : 'Karten',
           'Weapons Information' : 'Waffen',
           'Agents Detail Information' : "Es zeigt spielbare Agenten in Valorant. Abgesehen davon werden auch die technischen Spezifikationen, Rollen, Fähigkeiten und Geräusche der Agenten behandelt, die sie im Spiel erzeugen",
           'Gear Detail Information' : "Es gibt Informationen über die im Valorant verwendeten Rüstungen. Die Informationen enthalten den Namen, die Beschreibung, den Preis, die Kategorie und die Kategoriebeschreibung der Ausrüstung.",
           'Maps Detail Information' : "Es gibt Informationen über die im Valorant verwendeten Karten. Diese Karten werden im Karussell angezeigt",
           'Weapons Detail Information' : "Es zeigt auch die Verletzungs informationen am Körper über die gekauften Waffen, die im Valorant verkauft werden, mit Ausnahme ihrer technischen Merkmale",
           'Cost' : 'Kosten',
           'Category' : 'Kategorie',
           'Category Text' : 'Kategorie Text',
           'Fire Rate' : 'Feuerrate',
           'Magazine Size' : 'Magazingröße',
           'Reloaded Time' : 'Nachladezeit',
           'Head' : 'Kopfs',
           'Body' : 'Leibe',
           'Legs' : 'Beine',
           'Sound' : 'Klang'
        }
      },
      ar: {
        translations: {
           'Home': 'الصفحة الرئيسية',
           'Agents': 'عملاء',
           'Gear': 'درع',
           'Maps': 'خرائط',
           'Weapons': 'أسلحة',
           'Valorant API Documentation': 'وثائق أبي الشجاعة',
           'Agents Information' : 'معلومات الوكلاء',
           'Gears Information' : 'معلومات التروس',
           'Maps Information' : 'معلومات الخرائط',
           'Weapons Information' : 'معلومات الأسلحة',
           'Agents Detail Information' : "يظهر وكلاء للعب في لعبة Valorant. بصرف النظر عن ذلك ، يتم أيضًا تغطية المواصفات الفنية للوكلاء وأدوارهم ومهاراتهم وأصواتهم في اللعبة",
           'Gear Detail Information' : "يعطي معلومات عن الدروع المستخدمة في Valorant. تحتوي المعلومات على اسم العتاد والوصف والسعر والفئة ووصف الفئة.",
           'Maps Detail Information' : "يعطي معلومات حول الخرائط المستخدمة في Valorant. تظهر هذه الخرائط في دائري",
           'Weapons Detail Information' : "كما يعرض معلومات الإصابة على الجثة حول الأسلحة المشتراة التي تم بيعها في Valorant باستثناء ميزاتها الفنية",
           'Cost' : 'التكلفة',
           'Category' : 'باب',
           'Category Text' : 'نص كاتورغوري',
           'Fire Rate' : 'معدل الحريق',
           'Magazine Size' : 'حجم المجلة',
           'Reloaded Time' : 'وقت معاد التحميل',
           'Head' : 'رأس',
           'Body' : 'هيئة',
           'Legs' : 'السيقان',
           'Sound' : 'صوت'
        }
      },
      ja: {
        translations: {
           'Home': 'ホームページ',
           'Agents': 'エージェント',
           'Gear': '鎧',
           'Maps': '地図',
           'Weapons': '武器',
           'Valorant API Documentation': 'Valorant APIドキュメント',
           'Agents Information' : '代理店情報',
           'Gears Information' : '防具情報',
           'Maps Information' : '地図情報',
           'Weapons Information' : '武器情報',
           'Agents Detail Information' : 'Valorantでプレイ可能なエージェントを示しています。それとは別に、エージェントの技術仕様、役割、スキル、ゲームでのサウンドについても説明します。',
           'Gear Detail Information' : "ヴァロラントで使用されている鎧についての情報を提供します。情報には、ギアの名前、説明、価格、カテゴリ、およびカテゴリの説明が含まれています",
           'Maps Detail Information' : 'Valorantで使用されているマップに関する情報を提供します。これらの地図はカルーセルで表示されます',
           'Weapons Detail Information' : "また、技術的な特徴を除いて、バロラントで販売された購入した武器に関する身体の怪我情報も表示されます",
           'Cost' : '原価',
           'Category' : 'カテゴリ',
           'Category Text' : 'カドーリーテキスト',
           'Fire Rate' : '火災率',
           'Magazine Size' : 'マガジンサイズ',
           'Reloaded Time' : 'リロードされた時間',
           'Head' : '頭',
           'Body' : '体',
           'Legs' : '下肢',
           'Sound' : '音'
        }
      },
      fr: {
        translations: {
           'Home': "Page d'accueil",
           'Agents': 'Agent',
           'Gear': 'Armure',
           'Maps': 'Cartographie',
           'Weapons': 'Armes',
           'Valorant API Documentation': "Documentation de l'API Valorant",
           'Agents Information' : 'Informations Sur les Agents',
           'Gears Information' : 'Informations sur les Armures',
           'Maps Information' : 'Informations Sur les Cartes',
           'Weapons Information' : 'Informations Sur les Armes',
           'Agents Detail Information' : "Il montre des agents jouables dans Valorant. En dehors de cela, il est également couvert les spécifications techniques, les rôles, les compétences et les sons des agents qu'ils produisent dans le jeu.",
           'Gear Detail Information' : "Il donne une information sur les armures utilisées dans le Valorant. Les informations ont le nom de l'équipement, la description, le prix, la catégorie et la description de la catégorie.",
           'Maps Detail Information' : "Il donne une information sur les cartes utilisées dans le Valorant.Ces cartes sont affichées en carrousel",
           'Weapons Detail Information' : "Il affiche également les informations sur les blessures corporelles concernant les armes achetées vendues dans le Valorant, à l'exception de ses caractéristiques techniques.",
           'Cost' : 'Coût',
           'Category' : 'Catégorie',
           'Category Text' : 'Texte de la Catégorie',
           'Magazine Size' : 'Taille du Magazine',
           'Reloaded Time' : 'Temps de Rechargement',
           'Head' : 'Tete',
           'Body' : 'Corps',
           'Legs' : 'Les jambes',
           'Sound' : 'Sonner'
        }
      },
      it: {
        translations: {
           'Home': "Homepage",
           'Agents': 'Agente',
           'Gear': 'Armatura',
           'Maps': 'Mappa',
           'Weapons': 'Arma',
           'Valorant API Documentation': "Documentazione API Valorant",
           'Agents Information' : 'Informazioni Agenti',
           'Gears Information' : 'Informazioni Armatura',
           'Maps Information' : 'Informazioni Sulle Mappe',
           'Weapons Information' : 'Informazioni Sulle Armi',
           'Agents Detail Information' : "Mostra agenti giocabili in Valorant. Oltre a ciò, sono anche coperte le specifiche tecniche degli agenti, i ruoli, le abilità e i suoni che producono nel gioco",
           'Gear Detail Information' : "Fornisce informazioni sulle armature usate nel Valorant. Le informazioni hanno il nome dell'attrezzatura, la descrizione, il prezzo, la categoria e la descrizione della categoria.",
           'Maps Detail Information' : 'Fornisce informazioni sulle mappe utilizzate nel Valorant. Queste mappe sono mostrate nel carosello',
           'Weapons Detail Information' : 'Mostra anche le informazioni sulle lesioni sul corpo relative alle armi acquistate vendute nel Valorant ad eccezione delle sue caratteristiche tecniche',
           'Cost' : 'Costo',
           'Category' : 'Categoria',
           'Category Text' : 'Testo della Categoria',
           'Fire Rate' : 'Velocità di fuoco',
           'Magazine Size' : 'Dimensione Caricatore',
           'Reloaded Time' : 'Tempo ricaricato',
           'Head' : 'Testa',
           'Body' : 'Corpo',
           'Legs' : 'Gambe',
           'Sound' : 'Suono'
        }
      },
      pt: {
        translations: {
           'Home': "Inicial",
           'Agents': 'Agente',
           'Gear': 'Armadura',
           'Maps': 'Mapa',
           'Weapons': 'Arma',
           'Valorant API Documentation': "Documentação Valorant API",
           'Agents Information' : 'Informações Dos Agentes',
           'Gears Information' : 'Informações De Armadura',
           'Maps Information' : 'Informações Sobre Mapas',
           'Weapons Information' : 'IInformações Sobre Armas',
           'Agents Detail Information' : "Ele mostra agentes jogáveis ​​em Valorant. Além disso, também são abordadas as especificações técnicas dos agentes, papéis, habilidades e sons que eles fazem no jogo.",
           'Gear Detail Information' : "Dá uma informação sobre as armaduras usadas no Valorant. As informações têm o nome do equipamento, descrição, preço, categoria e descrição da categoria.",
           'Maps Detail Information' : "Dá uma informação sobre os mapas usados ​​no Valorant. Esses mapas são mostrados em carrossel",
           'Weapons Detail Information' : "Ele também mostra as informações de lesões no corpo sobre as armas compradas vendidas no Valorant, exceto por suas características técnicas",
           'Cost' : 'Costo',
           'Category' : 'Categoria',
           'Category Text' : 'Texto da Categoria',
           'Fire Rate' : 'Taxa de Incêndio',
           'Magazine Size' : 'Tamanho da Revista',
           'Reloaded Time' : 'Tempo Recarregado',
           'Head' : 'Cabeca',
           'Body' : 'Corpo',
           'Legs' : 'Perna',
           'Sound' : 'Som'
        }
      },
      ru: {
        translations: {
           'Home': "Домашняя страница",
           'Agents': 'агенты',
           'Gear': 'Броня',
           'Maps': 'Карты',
           'Weapons': 'Оружие',
           'Valorant API Documentation': "Документация Valorant API",
           'Agents Information' : 'Информация об Агентах',
           'Gears Information' : 'Информация о доспехах',
           'Maps Information' : 'Информация о Картах',
           'Weapons Information' : 'Информация об оружии',
           'Agents Detail Information' : "Он показывает игровых агентов в Valorant. Помимо этого, также рассматриваются технические характеристики агентов, роли, навыки и звуки, которые они издают в игре.",
           'Gear Detail Information' : "Он дает информацию о доспехах, используемых в Valorant. Информация имеет название передач, описание, цена, категория и описание категории.",
           'Maps Detail Information' : "Он дает информацию о картах, используемых в Valorant. Эти карты показаны в карусели.",
           'Weapons Detail Information' : 'Он также показывает информацию о травмах на теле о купленном оружии, проданном в Valorant, за исключением его технических особенностей.',
           'Cost' : 'Цена',
           'Category' : 'Категории',
           'Category Text' : 'Текст категории',
           'Fire Rate' : 'Скорострельность',
           'Magazine Size' : 'Размер журнала',
           'Reloaded Time' : 'Время перезагрузки',
           'Head' : 'Зав',
           'Body' : 'Тело',
           'Legs' : 'Ноги',
           'Sound' : 'Звук'
        }
      },
      ko: {
        translations: {
           'Home': "홈페이지",
           'Agents': '에이전트',
           'Gear': '갑옷',
           'Maps': '지도',
           'Weapons': '무기',
           'Valorant API Documentation': "Valorant API 문서",
           'Agents Information' : '에이전트 정보',
           'Gears Information' : '갑옷 정보',
           'Maps Information' : '지도 정보',
           'Weapons Information' : '무기 정보',
           'Agents Detail Information' : "Valorant에서 플레이 가능한 에이전트를 보여줍니다. 그 외에도 에이전트의 기술 사양, 역할, 기술 및 게임에서 만드는 소리도 포함됩니다.",
           'Gear Detail Information' : "발로란트에 사용된 방어구에 대한 정보를 제공합니다. 정보에는 장비의 이름, 설명, 가격, 범주 및 범주 설명이 있습니다.",
           'Maps Detail Information' : 'Valorant에서 사용된 지도에 대한 정보를 제공합니다. 이 지도는 회전목마에 표시됩니다.',
           'Weapons Detail Information' : '또한 Valorant에서 판매되는 구매한 무기에 대한 신체상의 부상 정보를 기술적 특징을 제외하고 보여줍니다.',
           'Cost' : '비용',
           'Category' : '범주',
           'Category Text' : '범주 텍스트',
           'Fire Rate' : '화재 속도',
           'Magazine Size' : '잡지 크기',
           'Reloaded Time' : '재로드된 시간',
           'Head' : '머리가',
           'Body' : '몸이',
           'Legs' : '다리',
           'Sound' : '소리'
        }
      },
      th: {
        translations: {
           'Home': "โฮมเพจ",
           'Agents': 'ตัวแทน',
           'Gear': 'เกราะ',
           'Maps': 'แผนที่',
           'Weapons': 'อาวุธ',
           'Valorant API Documentation': "Valorant API เอกสารประกอบ",
           'Agents Information' : 'ข้อมูลตัวแทน',
           'Gears Information' : 'ข้อมูลเกียร์',
           'Maps Information' : 'ข้อมูลแผนที่',
           'Weapons Information' : 'ข้อมูลอาวุธ',
           'Agents Detail Information' : "มันแสดงให้เห็นตัวแทนที่สามารถเล่นได้ใน Valorant นอกจากนั้น ยังครอบคลุมถึงข้อกำหนดทางเทคนิค บทบาท ทักษะ และเสียงของตัวแทนในเกม",
           'Gear Detail Information' : "มันให้ข้อมูลเกี่ยวกับชุดเกราะที่ใช้ใน Valorant ข้อมูลมีชื่อเกียร์ คำอธิบาย ราคา หมวดหมู่และคำอธิบายหมวดหมู่",
           'Maps Detail Information' : 'มันให้ข้อมูลเกี่ยวกับแผนที่ที่ใช้ใน Valorant แผนที่เหล่านี้แสดงในภาพหมุน',
           'Weapons Detail Information' : 'นอกจากนี้ยังแสดงข้อมูลการบาดเจ็บบนร่างกายเกี่ยวกับอาวุธที่ซื้อซึ่งขายใน Valorant ยกเว้นคุณสมบัติทางเทคนิค',
           'Cost' : 'ราคา',
           'Category' : 'ประเภท',
           'Category Text' : 'ข้อความประเภท',
           'Fire Rate' : 'อัตราการยิง',
           'Magazine Size' : 'ขนาดนิตยสาร',
           'Reloaded Time' : 'เวลาที่โหลดใหม่',
           'Head' : 'หัว',
           'Body' : 'ร่างกาย',
           'Legs' : 'ขา',
           'Sound' : 'เสียง'
        }
      },
      vi: {
        translations: {
           'Home': "Trang chủ",
           'Agents': 'Đại lý',
           'Gear': 'Áo giáp',
           'Maps': 'Bản đồ',
           'Weapons': 'Vũ khí',
           'Valorant API Documentation': "Tài liệu API Valorant",
           'Agents Information' : 'Thông tin đại lý',
           'Gears Information' : 'Thông tin áo giáp',
           'Maps Information' : 'Thông tin bản đồ',
           'Weapons Information' : 'Thông tin vũ khí',
           'Agents Detail Information' : "Nó hiển thị các tác nhân có thể chơi được trong Valorant. Ngoài ra, nó cũng bao gồm các thông số kỹ thuật, vai trò, kỹ năng và âm thanh của các đặc vụ mà họ tạo ra trong trò chơi",
           'Gear Detail Information' : "Nó cung cấp một thông tin về các bộ giáp được sử dụng trong Valorant. Thông tin có tên, mô tả, giá, danh mục và mô tả danh mục của thiết bị.",
           'Maps Detail Information' : 'Nó cung cấp thông tin về các bản đồ được sử dụng trong Valorant. Các bản đồ này được hiển thị trong băng chuyền',
           'Weapons Detail Information' : 'Nó cũng hiển thị thông tin thương tích trên cơ thể về vũ khí đã mua được bán trong Valorant ngoại trừ các tính năng kỹ thuật của nó',
           'Cost' : 'Chi phí',
           'Category' : 'Loại',
           'Category Text' : 'Văn bản Thể loại',
           'Fire Rate' : 'Tốc độ cháy',
           'Magazine Size' : 'Kích thước tạp chí',
           'Reloaded Time' : 'Thời gian nạp lại',
           'Head' : 'Đầu',
           'Body' : 'Thân thể',
           'Legs' : 'Chân',
           'Sound' : 'Âm thanh'
        }
      },
      "es-MX": {
        translations: {
          'Home': "Página de inicio",
          'Agents': 'Agentes',
          'Gear': 'Armadura',
          'Maps': 'Mapas',
          'Weapons': 'Armas',
          'Valorant API Documentation': "Documentación de la API de Valorant",
          'Agents Information' : 'Información de los agentes',
          'Gears Information' : 'Información de Armadura',
          'Maps Information' : 'Información de Mapas',
          'Weapons Information' : 'Información sobre armas',
          'Agents Detail Information' : "Muestra agentes jugables en Valorant.Aparte de eso, también está cubierto las especificaciones técnicas de los agentes, roles, habilidades y sonidos que hacen en el juego.",
          'Gear Detail Information' : "Da una información sobre las armaduras utilizadas en el Valorant.La información tiene el nombre del equipo, la descripción, el precio, la categoría y la descripción de la categoría.",
          'Maps Detail Information' : 'Proporciona información sobre los mapas utilizados en el Valorant.Estos mapas se muestran en carrusel',
          'Weapons Detail Information' : 'También muestra la información sobre lesiones en el cuerpo sobre las armas compradas vendidas en el Valorant, excepto por sus características técnicas.',
          'Cost' : 'Costar',
          'Category' : 'Categoría',
          'Category Text' : 'Texto de Categoría',
          'Fire Rate' : 'Velocidad de incendio',
          'Magazine Size' : 'Tamaño de la revista',
          'Reloaded Time' : 'Tiempo de recarga',
          'Head' : 'Cabeza',
          'Body' : 'Cuerpo',
          'Legs' : 'Piernas',
          'Sound' : 'Sonido'
        }
      },
      "es-ES": {
        translations: {
          'Home': "página de inicio",
          'Agents': 'Agente',
          'Gear': 'Armadura',
          'Maps': 'Mapa',
          'Weapons': 'Arma',
          'Valorant API Documentation': "Documentación de la API Valorant",
          'Agents Information' : 'Información de Agentes',
          'Gears Information' : 'Información de Armadura',
          'Maps Information' : 'Información de Mapas',
          'Weapons Information' : 'Información sobre Armas',
          'Agents Detail Information' : "Muestra agentes jugables en Valorant.Aparte de eso, también está cubierto las especificaciones técnicas de los agentes, roles, habilidades y sonidos que hacen en el juego.",
          'Gear Detail Information' : "Da una información sobre las armaduras utilizadas en el Valorant.La información tiene el nombre del equipo, la descripción, el precio, la categoría y la descripción de la categoría.",
          'Maps Detail Information' : 'Proporciona información sobre los mapas utilizados en el Valorant.Estos mapas se muestran en carrusel',
          'Weapons Detail Information' : 'También muestra la información sobre lesiones en el cuerpo sobre las armas compradas vendidas en el Valorant, excepto por sus características técnicas.',
          'Cost' : 'Costar',
          'Category' : 'Categoría',
          'Category Text' : 'Texto de Categoría',
          'Fire Rate' : 'Velocidad de incendio',
          'Magazine Size' : 'Tamaño de la revista',
          'Reloaded Time' : 'Tiempo de recarga',
          'Head' : 'Cabez',
          'Body' : 'Cuerpo',
          'Legs' : 'Piernas',
          'Sound' : 'Sonar'
        }
      },
      "zh-CN": {
        translations: {
          'Home': "主页",
          'Agents': '代理',
          'Gear': '装甲',
          'Maps': '地图',
          'Weapons': '武器',
          'Valorant API Documentation': "Valorant API 文档",
          'Agents Information' : '代理商信息',
          'Gears Information' : '盔甲信息',
          'Maps Information' : '地图信息',
          'Weapons Information' : '武器信息',
          'Agents Detail Information' : "它展示了Valorant中的可玩代理，除此之外，它还涵盖了代理的技术规格，角色，技能和他们在游戏中发出的声音。",
          'Gear Detail Information' : "它提供了有关英勇者中使用的盔甲的信息。这些信息有装备的名称，描述，价格，类别和类别描述。",
          'Maps Detail Information' : '它提供了有关Valorant中使用的地图的信息。这些地图显示在旋转木马中',
          'Weapons Detail Information' : '它还显示了关于在Valorant出售的购买武器的身体上的伤害信息，但其技术特征除外。',
          'Cost' : '成本',
          'Category' : '类别',
          'Category Text' : '类别文本',
          'Fire Rate' : '射速',
          'Magazine Size' : '杂志尺寸',
          'Reloaded Time' : '重新加载时间',
          'Head' : '头',
          'Body' : '体内',
          'Legs' : '双腿',
          'Sound' : '声音'
        }
      },
      "zh-TW": {
        translations: {
          'Home': "主頁",
          'Agents': '代理',
          'Gear': '裝甲',
          'Maps': '地圖',
          'Weapons': '武器',
          'Valorant API Documentation': "Valorant API 文件",
          'Agents Information' : '代理商資訊',
          'Gears Information' : '盔甲資訊',
          'Maps Information' : '地圖資訊',
          'Weapons Information' : '武器資訊',
          'Agents Detail Information' : "它展示了Valorant中的可玩代理，除此之外，它還涵蓋了代理的技術規格，角色，技能和他們在遊戲中發出的聲音。",
          'Gear Detail Information' : "它提供了有關英勇者中使用的盔甲的資訊。這些資訊有裝備的名稱，描述，價格，類別和類別描述。",
          'Maps Detail Information' : '它提供了有關Valorant中使用的地圖的資訊。這些地圖顯示在旋轉木馬中',
          'Weapons Detail Information' : '它還顯示了關於在Valorant出售的購買武器的身體上的傷害資訊，但其技術特徵除外。',
          'Cost' : '費用',
          'Category' : '類別',
          'Category Text' : '類別文本',
          'Fire Rate' : '射速',
          'Magazine Size' : '杂志尺寸',
          'Reloaded Time' : '重新加载时间',
          'Head' : '头',
          'Body' : '体内',
          'Legs' : '双腿',
          'Sound' : '聲音'
        }
      },
    },
    fallbackLng: 'tr',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  });
  
export default i18n;
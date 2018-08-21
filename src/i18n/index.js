import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import ru from 'react-intl/locale-data/ru'
import { connect } from 'react-redux'
import { selector } from './i18n.selector'

addLocaleData([...en, ...zh])

export const messages = {
  en: {
    introDescriptionLine: 'Our irrefutable rating system ensures' +
    ' project owners and trustworthy contractors find each other.' +
    ' Once connected users can start transacting safely through' +
    ' smart contracts.',
    subscribeTo: 'Subscribe to ',
    subscribeText: ' newsletter to stay up-to-date with the latest news on our token sale',
    about: 'About',
    tokenGenerationEvent: 'Token Sale',
    team: 'Team',
    blog: 'Blog',
    whitePaper: 'White Paper',
    businessOverview: 'Business Overview',
    businessPlatform: 'Business platform for frictionless collaboration',
    enterYourEmail: 'Enter your email',
    subscribe: 'Subscribe',
    stayInLoop: 'Stay in the loop Ties.Network Newsletter',
    network: 'Network',
    asBusinessTool: 'As a business tool Ties.Network enables members' +
    ' to securely connect and transact with top-rated professionals.' +
    ' Users collaborate on projects, receive counsel from industry' +
    ' experts and instantly strike deals via smart contracts.',
    learnMore: 'Learn More',
    networkRelies: 'The network relies on Ties.DB, a distributed' +
    ' and decentralized public database with fully integrated search' +
    ' across all data on Ties.Network. This new generation database' +
    ' can provide similar benefits for other DApps.',
    tiesNetworkText: 'Ties.Network is an Ethereum-based business platform for finding,' +
    ' collaborating and transacting with professionals. Our rating system' +
    ' is irrefutable: users are only connected with proven specialists.' +
    ' Smart contracts allow users to create teams and projects securely.' +
    ' We also offer anonymity and conduct ICO\'s due diligence with the ' +
    'help of community experts.',
    tiesDBText: 'Ties.DB serves two key roles. Firstly, it allows Ties.Network' +
    ' — or any other decentralized project — to store, search, and modify ' +
    'dynamic data. Secondly, it\'s fault tolerant. The result is a secure B2B' +
    ' solution for businesses looking to earn money from access given to its' +
    ' servers.',
    discover: 'Discover Ties.Network today',
    platform: 'Platform Architecture',
    multiPlatform: 'Ties.Network is a multilayered platform, which represents' +
    ' a decentralized net of servers (nodes) all connected to Ties.DB and' +
    ' the blockchain. Every node is connected through the Hyperboria network,' +
    ' providing speed, anonymity and end-to-end encryption of all communications.',
    networkApp: 'Ties.Network Application',
    eachUser: 'Each user accesses their network through our app. It’s simple' +
    ' to discover, connect and pay for services. The app stores your ' +
    'security keys, making these interactions instant and secure.',
    hypeboria: 'Hyperboria Network',
    hypeboriaMesh: 'The Hyperboria mesh network connects through the CJDNS' +
    ' protocol. This provides speed, anonymity and end-to-end encryption' +
    ' of all communications.',
    ethBlock: 'Ethereum Blockchain',
    transactions: 'Transactions in the system are based on the Ethereum' +
    ' blockchain, which run smart contracts.',
    engineRoom: 'This is the engine room of ties.network. The database' +
    ' is comprised of independent nodes which allow any node to search,' +
    ' add and remove dynamic content. Strategic data organization and' +
    ' incentive schemes ensure trust is upheld without central governance.' +
    ' Ties.DB is distributed, decentralized and public.',
    ethBasePlatform: 'Ethereum-Based Business Platform.',
    tieNetworkFort: 'Ties.Network fortifies professional collaboration.' +
    ' We use an irrefutable rating system to guide you towards proven experts.' +
    ' Smart contracts allow you to securely build teams and complete' +
    ' projects from ideation to ICO.',
    discover2: 'Discover. Collaborate. Transact.',
    ethBlock2: 'The Ethereum blockchain records all business transactions,' +
    ' forming a record of achievements for all users. This allows Ties.Network' +
    ' members to make an informed evaluation on the viability of potential partners.',
    features: 'Features',
    quickCrypto: 'Quick Crypto Transactions',
    userCan: 'Users can create project boards and select team members from' +
    ' around the world. Project wallets allow these contractors to be paid' +
    ' for one-off tasks or in monthly payments with TIE tokens, ETH or' +
    ' any other Ethereum-based token.',
    irrefutable: 'Irrefutable Rating System',
    ourRating: 'Our rating system is absent is free of fake endorsements.' +
    ' Each user has a proven track record based on their previous work history.',
    decentralisedRoles: 'Decentralised Roles',
    tiesNetworkEmploys: 'Ties.Network employs independent moderators, super-moderators' +
    ' and judges. These moderators regulate the blockchain ledger and supervise' +
    ' its dealings. They can use the contract terms to settle disputes when necessary.',
    escrow: 'Escrow for secure transactions',
    transactionsTemporarily: 'Transactions are temporarily sent to an intermediate' +
    ' trusted wallet until the deal is confirmed by all parties.',
    anonymity: 'Anonymity',
    usersMayChoose: 'Users may choose to stay anonymous.',
    explore: 'Explore Ties.Network use-cases',
    findBest: 'Find best rated crypto-experts.',
    tierating: 'Ties.Network rating is guaranteed by real business deals that have' +
    ' successfully  taken place. You can be sure that potential partners have' +
    ' a proven track record of achievements.',
    payDirectly: 'Pay directly on the platform.',
    negotiate: 'Negotiate the deal straight away and pay for completed work' +
    ' in cryptocurrency directly on the platform.',
    setUpTeam: 'Set up team for your project',
    launch: 'Launch a new project on the platform and quickly find the right people' +
    ' to develop it. You can assign tasks to people and pay for their work' +
    ' from the project’s wallet. Use the network to raise money to create' +
    ' your prototype or prepare for the ICO.',
    quickIco: 'Quick ICO Due Diligence by the community of experts',
    collective: 'Collective examination of a project and its related materials' +
    ' (i.e. white paper, smart contracts,  business plans, etc.).' +
    ' Evaluation of potential risks of its implementation, as well' +
    ' as its investment attractiveness.',
    keepInTouch: 'Keep in touch with the latest news',
    askUs: 'Ask us a question',
    dApp: 'Ties.DB is the answer to DApp storage',
    distributed: 'A public, distributed and decentralized database with one common' +
    ' thread: trust. Enforced by integrated fault tolerance, incentive schemes and smart contracts.',
    watch: ' Watch the video to learn more',
    keyFeatures: 'Key features of Ties.DB',
    allEth: 'All Ethereum-based decentralized applications (DApps) need' +
    ' to store non-financial data and allow search through their files.' +
    ' Ties.DB is the first public database for decentralized structured' +
    ' data storage, advanced search and documents modification.',
    graph: 'Graph shows data storage functionality for structured data',
    abilities: 'Abilities/Data Storages',
    type: 'Type',
    distribution: 'Distribution',
    publicity: 'Publicity',
    resistance: 'Resistance to the Byzantine Generals’ Problem',
    sharding: 'Sharding Support',
    speed: 'Speed',
    abilityToStore: 'Ability to store structured data',
    abilityToDelete: 'Ability to delete data',
    requestLanguage: 'Request language with an ability to conduct search using' +
    ' more than the primary key',
    tieDBCases: 'Ties.DB application cases',
    bigData: 'Big data',
    knowledge: 'Knowledge bases',
    media: 'Media catalogs',
    social: 'Social networks',
    forums: 'Forums',
    openDocuments: 'Open documents registries',
    massMedia: 'Mass media',
    dataStorage: 'Data storage',
    fileSharing: 'File sharing',
    verified: 'Verified Identification',
    haveID: 'All users have a unique ID verified by their private key.',
    usersSign: 'Users sign all transactions with their private key.',
    signingWith: 'Signing with a private key certifies the source of any changes.',
    withoutKey: 'Without a private key, users cannot make changes to content nor can they delete it.',
    specialData: 'Special Data Organization',
    userBecome: 'Users become tied to each record created as a result of their transactions.',
    eachRecords: 'Each record is replicated to a multitude of nodes.',
    allRecords: 'All records are publicly visible',
    theRecords: 'The record can only be modified by the owner.',
    incentive: 'Incentive Schemes',
    queries: 'Queries to the database are paid for by users.',
    nodesTie: 'Nodes earn TIE tokens for processing queries as well as storing and retrieving data.',
    pay: 'Required payment for modifications prevents SPAM.',
    security: 'Security',
    permissions: 'Permissions are stored in a blockchain.',
    nodesAnd: 'Nodes and users are registered in the blockchain.',
    nodeOwner: 'Node owners make security deposits to protect the network from malicious behavior.',
    mutual: 'Mutual settlements between users and nodes are done via blockchain',
    tge: 'Token Generation Event Starts in',
    collected: '$33.600.000 collected',
    rate: '$0.24 Current rate',
    tokens: '140.000.000 TIE tokens issued',
    today: 'Discover Ties.Network today.',
    tool: 'As a business tool Ties.Network enables members to securely connect and' +
    ' transact with top-rated professionals. Users collaborate on projects,' +
    ' receive counsel from industry experts and instantly strike deals via' +
    ' smart contracts.',
    relies: 'The network relies on Ties.DB, a distributed and decentralized' +
    ' public database with fully integrated search across all data on' +
    ' Ties.Network. This new generation database can provide similar benefits' +
    ' for other DApps.',
    bonus: 'Bonus Scale',
    tgeOffer: 'Ties.Network Token Generation Event offers special bonus' +
    ' depending on how early an investor has decided to support the Token' +
    ' Generation Event. Bonus range from 20% for the first 10% of tokens' +
    ' sold stepping down to zero discount for the last 10% of tokens available' +
    ' for the market. Currently, there are 140.000.000 tokens available, so' +
    ' discount steps down with each 14.000.000 tokens sold. The exact discount' +
    ' rate is available on the picture below',
    terms: 'Token Sale Terms',
    funds: 'Funds raised with the Ties.Network Token Generation Event will' +
    ' primarily cover marketing and operating costs. Additional funds are' +
    ' also applied to the strategic scaling of Ties.Network.',
    target: 'Target in crowdsale: $33.6 million',
    total: 'Total token supply: 140 000 000 TIE',
    lines: 'Expenditure lines:',
    marketing: '31% Promotion (Marketing, PR, Social Media)',
    it: '19% IT (Development, Testing, Technical Support)',
    bussines: '20% Business (Advisers, Audit, Consulting, Team)',
    supportFunc: '16% Support (HR, Legal, Accounting)',
    overhead: '14% Overheads (Office, Equipment, Maintenance)',
    er20: 'Ethereum ERC20, ERC223 token',
    purchase: 'Purchase methods accepted: BTC and ETH',
    initiated: 'Project initiated',
    reseach: 'Research & Prototyping',
    ico: 'Ties.Network ICO',
    development: 'Development of Ties.Network and Ties.DB',
    preAlpha: 'Pre-Alpha of Ties.Network and Ties.DB ready',
    launchTie: 'Launch of Ties.Network',
    partners: 'Partners',
    meetTeam: 'Meet the rest of the team',
    neymark: 'Alexander Neymark has been launching and developing financial' +
    ' services for banks and telecommunications companies since 2000. In 2012,' +
    ' he began creating a platform for aggregating financial user data' +
    ' (account aggregation technology), which was implemented in the final development' +
    ' of Krawlly.',
    kochin: 'Dmitry Kochin has extensive experience in IT. He holds a PHD in' +
    ' Technical Sciences and has been a serial entrepreneur in the IT sector since 2005.' +
    ' Dmitry has been involved in a variety of software projects related to payment' +
    ' processing, account aggregation, computer telephony and even financial services' +
    ' within online games. Since 2014 he has been using his studies to investigate' +
    ' blockchain and cryptocurrency problems.',
    founder: 'Founder, CEO',
    neymark2: 'Alexander Neymark has a significant experience in launching and developing' +
    ' innovative financial services in banks and telecommunications companies' +
    ' (starting from 2000). In 2012, he began his work on creating a platform' +
    ' for aggregating financial user data (account aggregation technology),' +
    ' which was implemented in the final development of Krawlly (krawlly.com)' +
    ' creating smart crawlers for aggregating financial user data.',
    founderPhd: 'Founder, CTO, PhD',
    kochin2: 'Dmitry Kochin has strong experience in IT and is PhD in Technical Sciences.' +
    ' Serial entrepreneur in IT sector since 2005.He has been involved in a variety of' +
    ' software projects dealing with payment processing, account aggregation, computer' +
    ' telephony and even financial services within online games. Since 2014 he is absorbed' +
    ' in his study of blockchain and cryptocurrency problems.',
    head: 'Head of Software Development',
    anton: 'Starting his career as a programmer in 2006, Anton actively participated' +
    ' in numerous and diverse IT projects, from video surveillance systems, financial' +
    ' systems to state-level automation systems. Has extensive experience in software' +
    ' development using modern programming languages and advanced technologies.',
    busPartner: 'Co-founder, Business Development Partner',
    natalia: 'Natalia is an expert in international sales and cross-cultural negotiations.' +
    ' Her exceptional communication skills and business development strategies have proven' +
    ' to work in a number of financial projects across USA, Germany, England, France, UAE,' +
    ' Seychelles, Russia, and the Caribbean over the last 6 years. She is developing' +
    ' investor relations with crypto communities globally and is a regular speaker at' +
    ' international events',
    headOfProduct: 'Head of Product Management',
    mukharov: 'Sergey Mukhanov is a skilled professional with over 10-year experience' +
    ' in product management and development of innovative payment solutions from scratch' +
    ' to 40-million audience. He has extensive work experience with banks,' +
    ' telecommunication companies and worldwide payment systems.',
    javaExpert: 'Java developer, Big Data Expert',
    nicola: 'Nicola Marangoni has a strong competence in analytics databases and distributed' +
    ' systems. Starting from 1999, he has been involved in several Data Warehousing,' +
    ' Business Intelligence and Analytics projects in many different branches. Since 2012,' +
    ' his focus relies in distributed systems like Apache Hadoop, HBase and Apache Spark' +
    ' and has developed an extensive experience in data engineering and data architecture.',
    developer: 'Software developer',
    javaDev: 'Java developer passionate about blockchain and cryptography technologies',
    blockDeveloper: 'A blockchain developer with experience in smart contracts, assets,' +
    ' bitcoin, android and governance systems. Rodrigo have worked with Dash, Pivx' +
    ' and Internet of People',
    mgimo: 'MGIMO college graduate with 6 years of experience in IT. Participated' +
    ' in projects of different kind: online stores, media portals (news), aggregation' +
    ' of accounts (Krawlly) and so on. Since 2014, Ivan have been working on the' +
    ' development of PWA (Progressive Web Apps) and studying various ideas for' +
    ' creating a user-friendly UI / UX interface.',
    advisorCo: 'Advisor. Co-Chairman Blockchain Ecosystem Network',
    bauch: 'Alex Bausch is a seasoned entrepreneur with broad experience in all' +
    ' aspects of international business development and creating global technology' +
    ' companies. He has a background in the telecom and security industry, with' +
    ' a proven track record in building successful companies and scaling them globally.' +
    ' Alex is also the co-chairman of the Blockchain Ecosystem Network | BECON.',
    advisorEducation: 'Advisor. Education and Science',
    techAdvisor: 'Technical advisor',
    prAdvisor: 'Advisor. PR and Social Outreach',
    financeAdvisor: 'Advisor, Finance and Security',
  },
  zh: {
    introDescriptionLine: '具有智能合约背景的商业平台 在您的专业网络中担保商业交易安全',
    subscribeTo: '订阅 ',
    subscribeText: ' 简讯，接收我们代币众筹的最新新闻',
    about: '关于',
    tokenGenerationEvent: '代币生成事件',
    team: '团队',
    blog: '博客',
    whitePaper: '白皮书',
    businessOverview: '商业概观',
    businessPlatform: '无缝合作的商业平台',
    enterYourEmail: '输入邮箱',
    subscribe: '订阅',
    stayInLoop: '订阅 Ties.Network 的新闻',
    network: '网络',
    asBusinessTool: '作为一款商业工具，Ties.Network 让成员可以通过智能合约随时与顶级的专家取得安全的联络并达成商业交易。在项目中用户合作，获得行业专家的建议，并立刻通过智能合约达成协议。',
    learnMore: '获得更多',
    networkRelies: '该网络依赖于Ties.DB，这是一个分布式和去中心化的公共数据库，可在Ties.Network上搜索所有数据。 这个新一代数据库可以为其他DApps提供同样的优势。',
    tiesNetworkText: 'Ties.Network是一个基于以太坊的商务平台，用于查找，协作和与专业人士进行交易。 我们的评级系统是无可辩驳的：用户只与得到认可的专家联系。 智能合约允许用户安全地创建团队和项目。 我们的社区专家帮助匿名地进行ICO。',
    tiesDBText: 'Ties.DB发挥两个作用。 首先，它允许Ties.Network（或任何其他去中心化的项目）存储，搜索和修改动态数据。 其次，它有容错功能。 为商家提供一个安全的B2B解决方案，商家可以通过其服务器访问赚钱。',
    discover: '现在探索Ties.Network',
    platform: '平台架构',
    multiPlatform: 'Ties.Network是一个多层次的平台，代表了一个分布式的网络服务器（节点），它们都连接到Ties.DB和区块链上。每个节点都通过Hyperboria网络进行连接，为所有节点的通信提供高速的、匿名性和端到端的加密。',
    networkApp: 'Ties.Network应用程序',
    eachUser: '每个用户都可以通过我们的应用程序访问他们的网络。我们让发现、连接和支付变得很简单。该应用程序还可以存储您的安全密钥，使这些交易即时和安全。',
    hypeboria: 'Hyperboria网络',
    hypeboriaMesh: 'Hyperboria网状型网络通过CJDNS协议连接。为交易提供了通信的速度、匿名性和端到端加密。',
    ethBlock: '以太坊区块链',
    transactions: '系统中的交易是运行在基于智能合约的以太坊区块链中。',
    engineRoom: '这是tie.network的引擎室。数据库由独立节点组成，支持任何节点的搜索、添加和动态删除内容。战略数据组织和激励程序能够确保在没有中央治理的情况下的交易得到信任和维护。 Ties.DB是分布式的、去中心化和公开的。',
    ethBasePlatform: '基于以太坊的业务平台。',
    tieNetworkFort: 'Ties.Network强化了专业性协作。我们使用无可质疑的评分系统，让成熟的专家来指导您。通过智能合约让您安全地组件团队，并从通过ICO的方式完成项目融资。',
    discover2: '发现、合作、交易。',
    ethBlock2: '以太坊区块链记录了所有的业务交易，形成了所有用户的交易记录。能够让Ties.Network成员对潜在的合作伙伴进行可行性分析，做出明智的评估。',
    features: '特征',
    quickCrypto: '交易快速加密',
    userCan: '用户可以创建项目模板，并招募来自世界各地的团队成员。项目钱包能够让这些承包商使用TIE代币、以太币或任何其他基于以太坊的代币来支付一次性任务或月结款项。',
    irrefutable: '无可质疑的评级系统',
    ourRating: '我们的评级系统是不存在虚假信息的。每个用户的信用评价都是根据他们以前良好的历史工作记录进行评价的。',
    decentralisedRoles: '分布式规则',
    tiesNetworkEmploys: 'Ties.Network采用独立的管理员，超级管理员和仲裁者。这些管理员对区块链账本中的交易进行监督。他们在必要时可以使用合同条款解决纠纷。',
    escrow: '用于安全交易的托管',
    transactionsTemporarily: '交易被暂时发送到由中央节点信任的钱包，直到交易被所有各方确认后。',
    anonymity: '匿名',
    usersMayChoose: '用户可以选择保持匿名。',
    explore: '探索Ties.Network案例',
    findBest: '找到最好的密码学专家。',
    tierating: '“Ties.Network评级由下列因素保证 真正达成协议的商业交易已经开始取得成功。你可以肯定这个具有潜力的合作伙伴已取得了良好的成功记录。',
    payDirectly: '直接在平台上支付。',
    negotiate: '直接在平台上支付通过加密货币完成支付和并直接达成协议',
    setUpTeam: '创建您项目的团队',
    launch: '找到合适的人来共同发展。你可以分配任务给其他人，并通过项目的钱包中给成员们支付工作费用。使用网络筹集资金来、创建产品原型或为ICO做准备。“',
    quickIco: '根据社区专家的意见快速启动ICO',
    collective: '根据社区专家的意见快速启动ICO 共同审查项目及其相关事宜的材料（即白皮书、智能合约、商业计划等）。 评估其实施的潜在风险以及对用户的投资吸引力。',
    keepInTouch: '订阅最新消息并报出li联络',
    askUs: '问我们问题',
    dApp: 'Ties.DB是DApp存储的解决方案',
    distributed: '一个公共、分布式和去中心化的数据库，拥有共同的主题：信任。通过综合容错、激励计划和智能合约来共同实施。',
    watch: ' 观看视频了解更多',
    keyFeatures: 'Ties.DB的主要功能',
    allEth: '所有基于以太坊的分布式应用程序（DApps）都需要存储非交易类数据，并能够支持对文件进行搜索他。Ties.DB是第一个用于分布式结构的数据存储，支持高级搜索和文档修改的公共数据库。',
    graph: '图表显示了结构化数据的数据存储功能',
    abilities: '能力/数据存储',
    type: '类型',
    distribution: '分配',
    publicity: '公开',
    resistance: '解决拜占庭式将军容错问题',
    sharding: '支持分配',
    speed: '速度',
    abilityToStore: '支持存储结构化数据的能力',
    abilityToDelete: '支持删除数据',
    requestLanguage: '能够使用超过主键范围以外的语言进行搜索',
    tieDBCases: 'Ties.DB应用案例',
    bigData: '大数据',
    knowledge: '知识库',
    media: '媒体目录',
    social: '社交网络',
    forums: '论坛',
    openDocuments: '打开文件注册表',
    massMedia: '媒体',
    dataStorage: '数据存储',
    fileSharing: '文件共享',
    verified: '识别验证',
    haveID: '所有用户都可以通过私钥验证获得唯一的ID。',
    usersSign: '用户使用其私钥对所有交易进行签名验证。',
    signingWith: '使用私钥签名对更改的来源进行认证。',
    withoutKey: '没有私钥，用户不能对其内容进行更改，也不能删除它。',
    specialData: '特殊数据组织',
    userBecome: '用户被绑定到由其交易而创建的每个记录中。',
    eachRecords: '每个记录被复制到多个节点中。',
    allRecords: '所有记录都是公开的',
    theRecords: '记录只能由所有者进行修改。.',
    incentive: '奖励计划',
    queries: '对数据库的查询由用户进行支付。',
    nodesTie: '节点获取TIE代币用于处理数据查询以及存储和检索数据。',
    pay: '修改时要求付款可以防止垃圾邮件。',
    security: '安全性',
    permissions: '权限存储在区块链中。',
    nodesAnd: '节点和用户在区块链中进行注册。',
    nodeOwner: '节点所有者进行安全存款以保护网络免受恶意行为的影响。',
    mutual: '用户和节点之间的相互作用是通过区块链完成的',
    tge: '代币生成事件开始',
    collected: '募集33,600,000美元',
    rate: '当前价格0.24美元',
    tokens: '发行共计140，000，000 TIE代币',
    today: '现在探索Ties.Network',
    tool: '作为一款商业工具，Ties.Network 让成员可以通过智能合约随时与顶级的专家取得安全的联络并达成商业交易。在项目中用户合作，获得行业专家的建议，并立刻通过智能合约达成协议。',
    relies: '该网络依赖于Ties.DB，这是一个分布式和去中心化的公共数据库，可在Ties.Network上的所有数据中进行完全的搜索。这个新一代数据库可以为其他DApps提供类似的支持。',
    bonus: '奖励金规模',
    tgeOffer: 'Ties.Network代币生成事件根据投资者在代币生成事件的时间段不同提供不同的特殊折扣优惠。优惠会从前10％的代币出售时20％的优惠降低到最后10％的代币的零优惠折扣。目前，有140,000,000代币是可用的，随着每售出14，000，000代币，折扣也会相应的降低。下面的图片可以看出确切的折扣率',
    terms: '代币生成事件条款',
    funds: 'Ties.Network代币生成活动募集的资金将主要用于涵盖营销和运营成本。额外资金也适用于Ties.Network的战略扩张。',
    target: '目标金额：3360万美元',
    total: '总代币供应量：140 000 000 TIE',
    lines: '分配比例',
    marketing: '31％用于营销支持',
    it: '19％用于IT功能',
    bussines: '20％用于商业',
    supportFunc: '16％用于支持功能',
    overhead: '14％用于综合性开销',
    er20: '以太坊 ERC20、ERC223标准代币',
    purchase: '接受支付方式：比特币和以太币',
    initiated: '项目启动',
    reseach: '市场调研和产品原型',
    ico: 'Ties.Network ICO',
    development: '发展Ties.Network和Ties.DB',
    preAlpha: 'Ties.Network和Ties.DB的Alpha版本',
    launchTie: '发布Ties.Network',
    partners: '合作伙伴',
    meetTeam: '团队介绍',
    neymark: '亚历山大·尼克马克自2000年以来一直为银行和电信公司开发金融服务业务。2012年，他开始创建汇总金融用户数据（账户整合技术）的平台，该平台最终是通过Krawlly的开发实现的。',
    kochin: 'Dmitry Kochin在IT方面拥有非常丰富的经验。他拥有计算机科学博士学位，自2005年以来一直是IT部门的管理者。Dmitry参与了在线游戏中支付处理、帐户整合、计算机通讯和金融服务有关的各种软件项目中。自2014年以来，他一直在进行区块链和加密货币的市场调研。',
    founder: '创始人，CEO',
    neymark2: '亚历山大·内曼（Alexander Neymark）在银行和电信行业的创新开发和金融服务方面拥有丰富的经验（从2000年开始）。 2012年，他创建了一个整合金融用户数据（帐户整合技术）的平台，该平台最后在Krawlly（krawlly.com）的开发中实现，开发了用于整合金融用户数据的智能爬虫。',
    founderPhd: 'CTO创始人，博士生导师',
    kochin2: 'Dmitry Kochin在IT技术方面拥有丰富的经验，是科学技术博士。自2005年以来，作为来自IT部门的企业家参与了各种软件项目的开发，涉及支付处理、账户汇总、计算机通讯甚至是网络游戏中的金融服务。自2014年以来，他被区块链技术和密码学问题所深深吸引。',
    head: '软件开发负责人',
    anton: 'Anton于2006年开始从事程序员工作，他先后积极参与了视频监控系统、财务系统和国家级自动化系统等众多不同领域的IT项目开发工作。在使用现代编程语言和先进技术的软件开发方面有着非常丰富的经验。',
    busPartner: '商业开发合作伙伴',
    natalia: '纳塔利娅是国际销售和跨文化的谈判专家。过去6年来，她卓越的沟通技巧和业务发展战略已得到正式，她曾在美国、德国、英国、法国、阿联酋、塞舌尔、俄罗斯和加勒比地区的一些金融项目上工作。目前她正在开发全球的加密社区的投资者关系，并且经常成为国际活动中的演讲嘉宾',
    headOfProduct: '产品管理主管',
    mukharov: 'Sergey Mukhanov是一名技术熟练的专业人士，在零售产品管理和创新支付解决方案开发方面拥有超过10年的丰富经验，让用户从零增加到了四千万。 他在银行、电信公司和全球支付系统方面拥有丰富的工作经验。',
    javaExpert: 'Java开发人员，大数据专家',
    nicola: 'Nicola Marangoni在数据库分析和分布式系统方面具有很强的竞争力。 从1999年开始，他在许多不同的分支机构参与了多个数据仓库、商业智能和分析项目的建设。 自2012年以来，他的工作重点放在了分布式系统中，诸如Apache Hadoop，HBase和Apache Spark，他在数据工程和数据架构开发方面有着非常丰富的经验。',
    developer: '软件开发人员',
    javaDev: '热衷于区块链和加密技术的Java开发者。',
    blockDeveloper: '具有智能合同、数字资产、比特币、Android和自治系统经验的区块链开发者。 罗德里戈曾在Dash、Pivx和人民网工作。',
    mgimo: '毕业于MGIMO大学，拥有6年IT经验。 参与过很多不同类型的项目：网上商店、媒体门户（新闻）、账号汇总（Krawlly）等。 自2014年以来，Ivan一直致力于开发PWA（渐进式Web应用程序）和研究如何创建对用户更加友好的UI / UX界面。',
    advisorCo: 'Advisor. 顾问。联合主席区块链生态系统网络',
    bauch: 'Alex Bausch是一位经验丰富的企业家，在国际业务发展的各个方面都拥有着非常丰富的经验，并创建了全球性的技术公司。 他拥有电信和网络安全的行业背景，成功创建了公司并在全球业务扩展方面取得了良好的业绩。 Alex还是区块链生态系统网络的联合主席、',
    advisorEducation: '教育与科学顾问',
    techAdvisor: '技术顾问',
    prAdvisor: '公关和社会宣传顾问',
    financeAdvisor: '财务和安全顾问',
  },
}


export function messagesProvider(locale) {
  return messages[locale]
}

export const ConnectedIntlProvider = connect(selector)(IntlProvider)

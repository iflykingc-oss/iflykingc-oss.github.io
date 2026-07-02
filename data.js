// Bilingual strings — focused on the person + products, NOT the website itself
const i18n = {
  zh: {
    nav: { saas: 'AI SaaS', apps: 'AI Apps', tools: 'AI 工具' },
    hero: {
      badge: 'INDEPENDENT AI BUILDER',
      title: '用 AI 做产品，让想法落地。',
      subtitle: '我是 Hardy，独立 AI 产品构建者。过去 6 个月里独立完成 9 款 AI 产品，覆盖求职、客服、销售、数据分析、创业雷达等多个真实场景。',
      cta1: 'GitHub',
      cta2: '联系合作'
    },
    stats: { projects: '个产品', products: '个商业 SaaS', demos: '个 Live Demo', languages: '种语言' },
    sectionTitle: {
      saas: 'AI SaaS · 已商业化',
      apps: 'AI Apps · 用户产品',
      tools: 'AI 工具 · 开发者向'
    },
    card: {
      demo: '在线体验',
      code: '查看源码',
      private: '私有',
      tech: '技术栈',
      features: '核心特性',
      statusActive: '活跃维护',
      statusStable: '稳定运行',
      statusSunset: '已归档',
      updated: '更新于'
    },
    about: {
      title: '关于我 | Hardy',
      paragraphs: [
        '大厂复合背景。做过培训讲师、K12 线上班主任、智能客服运营体系搭建，后来专职深耕 RAG 类 AI 产品设计。这些角色让我同时看两侧——用户怎么被服务，系统怎么被搭起来。',
        'AI 浪潮兴起后，全面拥抱 AI，用 vibe coding 拓展个人边界。从业务需求、架构设计、RAG 检索增强、Agent 工程、前后端到上线运营——每个项目都是自己一个人从头做到底，目前项目均已上线，正在持续打磨。',
        '现阶段深耕：RAG 工程化 · Agent 智能体 · AI 应用商业化落地。如果你对 AI 也有兴趣，欢迎一起交流：<a href="mailto:iflykingc@gmail.com">iflykingc@gmail.com</a>'
      ]
    },
    thinking: {
      title: '做 AI 产品的一些想法',
      subtitle: '9 款产品下来反复打磨的几件事。引用公开知识 + 我不认同什么 + 我补什么。',
      items: [
        {
          tag: 'METHOD',
          title: 'Vibe Coding',
          hook: 'Karpathy 的定位软了，拐点是验证成本',
          body: 'Karpathy 2025 年提的词定义在"写 prototype"——我觉得太软了。把它推到生产代码真正要回答的问题不是"能不能用"，是**验证成本和编写成本的拐点**：AI 提的方案你一眼能判断对错，vibe coding 赢；需要先读 5 个模块、拼出系统行为才能判断，vibe coding 输。我自己拐点大概在 BuddyJob 这种 codebase：43 个 deps + Next 16 + 6 国语言 i18n + Supabase RLS 几套策略 + Stripe/PayPal——AI 抽象层开始跟我定的不一致时，"读 + 改"反而比"接受 + debug"更慢。'
        },
        {
          tag: 'ARCHITECTURE',
          title: 'Harness 思维',
          hook: 'Anthropic 漏了第 4 种失败模式',
          body: 'Anthropic "Building Effective Agents" 列了三种失败模式（context poisoning / distraction / clash）是好分类，但**漏了第 4 种"state decay"——长对话里 agent 几轮前的关键决策被中途摘要挤掉、行为开始跑偏。** 做 AIkefu 时这个出现频率最高——它部署起来是 10 个独立 service（ab_testing / advanced / feishu_bot / integrated / model_config / operation / quality / rag …），客户对话横跨多个服务时状态最容易丢。**比 prompt 更能拉开差距的是工具粒度。** `send_email` 太粗；`send_email(to, subject, body, retry_count)` 显式失败语义才管用。工具质量 > prompt 质量，永远。'
        },
        {
          tag: 'PRACTICE',
          title: 'RAG ≠ embedding 模型',
          hook: '文档时代 RAG 撑不起 Agent 工作流',
          body: 'Anthropic "Contextual Retrieval" 和 Greg Kamradt chunking 实验都来自**文档问答**场景。把它们直接搬到 agent 是常见但错的偷懒：文档 RAG 优化"找相似文字"，agent RAG 优化"找我现在该怎么做"。**同一个 KB 在 agent 里一个 turn 可能要 query N 次，每次按 state 重写查询——单次 retrieve 的架构根本撑不住。** VibeCoding OCR 用 VLM+OCR 双通道融合时，22 条 pytest 跑通看似稳，但实际生产里最大的 bug 不是切法粗，是 query 在多个 chunk 间来回挑不准。我看到大多数"AI 助手" hallucination 的根因就是这个：用文档时代的 RAG 跑 agent 时代的任务。'
        },
        {
          tag: 'MINDSET',
          title: 'Context Engineering',
          hook: 'Context 预算怎么花，才是真问题',
          body: '"Context is a budget, not a buffet" 是好口号，但实操关键不在"加什么"，在**每轮怎么重新分配**——新一条用户消息吃预算；一次工具结果要更多预算；一条 RAG 结果挤掉最近的对话。我工作中的实操是**长期槽 vs 临时槽**：身份 / 任务 state / 最近 3 步动作放常驻槽（写入贵但保留便宜）；其余按需 RAG / 摘要 / 丢弃。SalesCoach 这类"加载 5 个 package（ai-service / api / chrome-extension / shared / web）"的多包 monorepo，context 工程的关键不是 prompt 多漂亮，是**每个包里 system prompt 留多少、共享模块塞多少的取舍**。**真正的判断题是：什么东西该升级到常驻、什么时候又该把它降级掉。**'
        }
      ]
    },
    footer: {
      title: '聊聊看',
      desc: '如果你也在做 AI 产品，欢迎交流。',
      visits: '第 <strong>{n}</strong> 次相遇 · 感谢你路过这里',
      copy: '© 2026 iflykingc · Made with vibe + Claude Code'
    }
  },
  en: {
    nav: { saas: 'AI SaaS', apps: 'AI Apps', tools: 'AI Tools' },
    hero: {
      badge: 'INDEPENDENT AI BUILDER',
      title: 'Build AI products that ship.',
      subtitle: "I'm Hardy — an independent AI product builder. In the past 6 months I've shipped 9 AI products across career platforms, customer service, sales coaching, analytics, and AI startup discovery.",
      cta1: 'GitHub',
      cta2: 'Get in touch'
    },
    stats: { projects: 'products', products: 'commercial SaaS', demos: 'live demos', languages: 'languages' },
    sectionTitle: {
      saas: 'AI SaaS · Commercial',
      apps: 'AI Apps · Consumer',
      tools: 'AI Tools · Developer'
    },
    card: {
      demo: 'Live demo',
      code: 'Source code',
      private: 'Private',
      tech: 'Tech stack',
      features: 'Key features',
      statusActive: 'Active',
      statusStable: 'Stable',
      statusSunset: 'Archived',
      updated: 'Updated'
    },
    about: {
      title: 'About | Hardy',
      paragraphs: [
        'Mixed background at big companies — training instructor, K12 online homeroom, customer-service ops, then RAG-focused AI product design. These roles put me on both sides at once: how users get served, and how the system underneath gets built.',
        "Once the AI wave hit, I went all in — using vibe coding to push my own boundaries. Requirements, architecture, RAG, agent engineering, frontend, backend, launch, ops — every project is one-person all the way through. Everything is freshly launched and being polished.",
        "Right now: RAG productization, agent engineering, AI commercialization. If you're into AI too, let's talk: <a href=\"mailto:iflykingc@gmail.com\">iflykingc@gmail.com</a>"
      ]
    },
    thinking: {
      title: 'Some thoughts on AI products',
      subtitle: 'After 9 products. Public research + what I disagree with + what I add.',
      items: [
        {
          tag: 'METHOD',
          title: 'Vibe coding',
          hook: "Karpathy's framing is too soft; the real crossover is verification cost",
          body: 'Karpathy\'s 2025 framing centers "writing prototypes". Pushed into production, the real question isn\'t "does it work" — it\'s the **verification cost vs writing cost** crossover. If you can judge AI\'s output at a glance, vibe coding wins. If you need five modules of context to judge it, vibe coding loses. My own crossover point lands inside BuddyJob-shaped codebases: 43 deps + Next 16 + 6 locales + Supabase RLS + Stripe/PayPal — once AI abstractions start diverging from mine, "read + edit" gets slower than "accept + debug later".'
        },
        {
          tag: 'ARCHITECTURE',
          title: 'Harness first',
          hook: 'Anthropic missed a 4th failure mode',
          body: 'Anthropic\'s "Building Effective Agents" lists three: context poisoning, distraction, clash — good taxonomy. **It misses a 4th: state decay** — long-running conversations where the agent quietly drops key decisions from earlier turns as the summary expands, behavior drifts. I hit this most in AIkefu — it deploys as 10 independent services (ab_testing / advanced / feishu_bot / integrated / model_config / operation / quality / rag / …); when a customer conversation spans multiple services, the state is what gets lost first. **What moves the needle more than prompts is tool granularity.** `send_email` is too coarse; `send_email(to, subject, body, retry_count)` with explicit failure semantics is what actually ships. Tool quality > prompt quality, always.'
        },
        {
          tag: 'PRACTICE',
          title: "It's not your embedding model — it's your chunks",
          hook: 'Document-era RAG cannot carry agent workflows',
          body: 'Anthropic\'s 2024 "Contextual Retrieval" and Greg Kamradt\'s chunking research both target **document-QA**. Carrying them straight into agent workflows is a common-but-wrong shortcut: document RAG optimizes "find similar text"; agent RAG optimizes "find what to do next". **The same KB in an agent often needs N queries per turn, each rewritten by current state — one-shot retrieve can\'t keep up.** In VibeCoding OCR I built VLM+OCR dual-channel fusion with 22 pytest cases passing — looks solid in tests, but the actual production bugs were not bad chunking: bad query rewriting between chunks. I trace most "AI assistant" hallucinations back to this: document-era RAG running agent-era tasks.'
        },
        {
          tag: 'MINDSET',
          title: 'Context engineering',
          hook: "It's not what to add — it's how to re-allocate every turn",
          body: '"Context is a budget, not a buffet" is a fine slogan. The real skill is **re-allocating every turn**: each new user message eats budget, each tool result costs more, each retrieved chunk competes with recent dialogue. In my work I keep two tiers: **persistent slots** (user persona, task state, last few actions — expensive to write, cheap to keep) vs **contextual slots** (everything else, retrieved or summarized on demand). **The judgment call: when does something earn a persistent slot, when do you demote it?** Real example: SalesCoach is a monorepo with 5 packages (ai-service / api / chrome-extension / shared / web) — context engineering there is not "write a great prompt", it\'s deciding what each package puts in its own system prompt vs what gets shared.'
        }
      ]
    },
    footer: {
      title: "Let's talk",
      desc: 'If you are working on AI products, reach out.',
      visits: 'Visit <strong>#{n}</strong> · thanks for stopping by',
      copy: '© 2026 iflykingc · Made with vibe + Claude Code'
    }
  }
};

// Project data — unchanged
const projects = [
  {
    id: 'buddyjob-web',
    cover: 'assets/buddyjob-web.svg',
    category: 'app',
    status: 'active',
    private: true,
    accent: '#60a5fa',
    name: { zh: 'BuddyJob 求职搭子', en: 'BuddyJob' },
    tagline: {
      zh: '面向东南亚求职者的 AI 求职助理 — 简历分析、模拟面试、Offer 评估',
      en: 'AI career assistant for Southeast Asian job seekers — resume, interview, offers'
    },
    tech: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind 3', 'Stripe · PayPal'],
    features: {
      zh: ['AI 简历分析 + 评分 + 优化建议', '多轮 AI 模拟面试 + 实时反馈', 'Offer 对比 + AI 求职知识库', '6 国语言（zh/en/vi/id/th/ms）+ 会员订阅'],
      en: ['AI resume scoring & optimization', 'Multi-turn AI mock interview & feedback', 'Offer comparison + AI career knowledge base', '6 languages (zh/en/vi/id/th/ms) + paid plans']
    },
    demo: 'https://buddyjob.asia',
    code: 'https://github.com/iflykingc-oss/buddyjob-web'
  },
  {
    id: 'AI-Radar',
    cover: 'assets/AI-Radar.svg',
    category: 'app',
    status: 'active',
    private: false,
    accent: '#a3e635',
    name: { zh: 'AI 创业雷达', en: 'AI Radar' },
    tagline: {
      zh: '每天发现并验证最新的 AI 创业项目 — 4D 评分 + 多语言推送',
      en: 'Discover and validate the newest AI products — 4D scoring + multi-channel push'
    },
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'LangGraph (Python)'],
    features: {
      zh: ['15 数据源：Reddit / HN / Product Hunt / arXiv / Hugging Face …', '4D 验证系统 · 置信度 0–100 评分', '推送：Email / 飞书 / Slack / Discord / TG / 钉钉', '12 类别分类 + 趋势追踪 + 对比雷达'],
      en: ['15 sources: Reddit / HN / Product Hunt / arXiv / Hugging Face …', '4D verification system · confidence 0–100', 'Push: Email / Feishu / Slack / Discord / TG / DingTalk', '12 categories + trends + comparison radar']
    },
    demo: 'https://ai-radar-delta-ochre.vercel.app',
    code: 'https://github.com/iflykingc-oss/AI-Radar'
  },
  {
    id: 'ShiftSmart',
    cover: 'assets/ShiftSmart.svg',
    category: 'app',
    status: 'stable',
    private: false,
    accent: '#fbbf24',
    name: { zh: 'ShiftSmart 智能排班', en: 'ShiftSmart' },
    tagline: {
      zh: '面向海外门店的智能排班 App — 零售 / 餐饮 / 服务业',
      en: 'AI shift scheduling for overseas retail & service stores'
    },
    tech: ['React Native (Expo)', 'TypeScript', 'Supabase', 'Tailwind (RN)'],
    features: {
      zh: ['业务量预测 → 自动生成下周排班', '拖拽式手动排班 + 班次冲突检测', '员工换班申请 & 审批工作流', '中英双语 + GDPR 合规 + Sentry 监控'],
      en: ['Demand-based auto scheduling', 'Drag-and-drop manual scheduling + conflict detection', 'Shift swap requests & approvals', 'ZH/EN bilingual + GDPR compliant + Sentry']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/ShiftSmart'
  },
  {
    id: 'LifeChartApp',
    cover: 'assets/LifeChartApp.svg',
    category: 'app',
    status: 'stable',
    private: false,
    accent: '#c084fc',
    name: { zh: '命运图谱 LifeChart', en: 'LifeChart · 命运图谱' },
    tagline: {
      zh: '"玄机子" AI 大师 — 八字 · 紫微 · 姓名 · 占卜 · 语音对话',
      en: '"Master XuanJiZi" — Bazi · Zi Wei · Name · Divination · voice chat'
    },
    tech: ['React Native (Expo 54)', 'Zustand', 'react-native-voice', 'expo-speech'],
    features: {
      zh: ['玄机子 AI 大师：阴阳五行 / 紫微斗数 / 姓名测算', '语音输入输出 · 今日运势 · 解梦 · 风水', '分析历史 + 知识库 · 7 大功能屏', 'iOS + Android 双端原生体验'],
      en: ['AI Master "XuanJiZi" — Yin-Yang / Zi Wei / Name analysis', 'Voice I/O · daily fortune · dream · feng shui', 'Analysis history + knowledge base · 7 screens', 'Native iOS + Android']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/LifeChartApp'
  },
  {
    id: 'AIkefu',
    cover: 'assets/AIkefu.svg',
    category: 'saas',
    status: 'active',
    private: true,
    accent: '#2dd4bf',
    name: { zh: 'AIkefu 智能客服', en: 'AIkefu' },
    tagline: {
      zh: '企业级智能客服 — 支持私有化本地部署，SaaS 也可',
      en: 'Enterprise AI customer service — on-prem or SaaS'
    },
    tech: ['Python 3.10+', 'FastAPI', 'LangGraph', 'SQLite / PG', 'Docker'],
    features: {
      zh: ['私有化本地部署 — Docker 一键启动，数据 100% 内网', 'RAG 知识库 + AI 质检 + SOP 流程编排', '转人工 SLA · 工单 · CSAT 满意度', '多渠道：飞书 / 微信 / 钉钉 / WhatsApp / Telegram / LINE'],
      en: ['On-prem deployment — Docker one-click, data stays in your network', 'RAG knowledge base + AI quality inspection + SOP workflow', 'Human handoff SLA · tickets · CSAT', 'Multi-channel: Feishu / WeChat / DingTalk / WhatsApp / Telegram / LINE']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/AIkefu'
  },
  {
    id: 'DataInsight',
    cover: 'assets/DataInsight.svg',
    category: 'saas',
    status: 'active',
    private: true,
    accent: '#f472b6',
    name: { zh: 'DataInsight 数据洞察', en: 'DataInsight' },
    tagline: {
      zh: 'AI 数据分析 SaaS — 上传 Excel / CSV，AI 自动生成图表与洞察报告',
      en: 'AI data analysis SaaS — upload Excel/CSV, get instant dashboards'
    },
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'Supabase'],
    features: {
      zh: ['自然语言 SQL · AI 图表推荐 · 智能数据洞察', '10+ 图表类型 · 6 行业模板（销售/营销/财务/HR/电商）', 'GA4 转化埋点 · 暗色主题 · 中英双语', 'PPP 定价（按购买力平价）面向全球市场'],
      en: ['Natural language SQL · AI chart recommender · smart insights', '10+ chart types · 6 industry templates', 'GA4 tracking · dark mode · EN/CN', 'PPP pricing (purchasing-power parity) for global markets']
    },
    demo: 'https://www.datainsight.live',
    code: 'https://github.com/iflykingc-oss/DataInsight'
  },
  {
    id: 'sales-ai-coach',
    cover: 'assets/sales-ai-coach.svg',
    category: 'saas',
    status: 'active',
    private: false,
    accent: '#fb7185',
    name: { zh: '销冠 AI 教练', en: 'Sales AI Coach' },
    tagline: {
      zh: 'AI 销售陪练平台 — 让每个销售都成为销冠',
      en: 'AI sales coaching platform — turn every rep into a top performer'
    },
    tech: ['React 19', 'Node.js', 'FastAPI', 'Prisma', 'PostgreSQL'],
    features: {
      zh: ['AI 话术生成：3 种风格（直爽/共情/专业）', '智能陪练 + 8 维度评分 + 实时反馈', '自动复盘 + 知识库 + 团队协作', '成就系统 · 行业插件（教育/金融/SaaS …）'],
      en: ['3-style AI pitch generator (direct / empathy / pro)', 'AI practice + 8-dimension scoring + feedback', 'Auto review + knowledge base + team collab', 'Achievements + industry plugins (edu/finance/SaaS …)']
    },
    demo: 'https://sales-ai-coach.vercel.app',
    code: 'https://github.com/iflykingc-oss/sales-ai-coach'
  },
  {
    id: 'newPackCV-OCR',
    cover: 'assets/newPackCV-OCR.svg',
    category: 'tool',
    status: 'active',
    private: false,
    accent: '#22d3ee',
    name: { zh: 'VibeCoding OCR', en: 'VibeCoding OCR' },
    tagline: {
      zh: '文档/图片结构化信息提取 — 8 行业场景 · 全格式 · Apache 2.0 开源',
      en: 'Document & image info extraction — 8 industries · all formats · Apache 2.0'
    },
    tech: ['Python 3.12', 'MinerU', 'VLM-First', 'Apache 2.0'],
    features: {
      zh: ['8 行业模板：包装 / 金融票据 / 银行流水 / 医药 / 合同 / 证件 / 物流 / 通用', '全格式输入：图片 / PDF / DOCX / PPTX / XLSX', 'VLM + OCR 双通道融合 · 22 测试通过 · 结构化 JSON 输出', '表格识别 + 条码 / 二维码 / 公章检测'],
      en: ['8 templates: packaging / finance / pharma / contract / ID / logistics / …', 'All formats: image / PDF / DOCX / PPTX / XLSX', 'VLM + OCR dual-channel fusion · 22 tests · JSON out', 'Tables + barcode / QR / stamp detection']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/newPackCV-OCR'
  },
  {
    id: 'aisclab',
    cover: 'assets/aisclab.svg',
    category: 'app',
    status: 'active',
    private: false,
    accent: '#94a3b8',
    name: { zh: 'aisclab 素材管理', en: 'aisclab · Asset Manager' },
    tagline: {
      zh: 'AI 驱动的电商素材全生命周期管理 — 多端后台（Web + 小程序 + 云函数）',
      en: 'AI-driven e-commerce asset lifecycle management — Web admin + Mini-program + Cloud functions'
    },
    tech: ['Vue 3', 'ElementPlus', 'UniApp', 'Tencent CloudBase', 'Playwright E2E'],
    features: {
      zh: ['Web 运营后台（Vue 3 + ElementPlus）+ 微信小程序（UniApp）双端', '腾讯云 CloudBase 云函数做后端（零运维、自动扩缩）', 'Playwright E2E 测试全链路覆盖', 'P1/P2/P3 多阶段迭代 + AGENTS.md / CLAUDE.md 协助 AI 协作开发'],
      en: ['Web admin (Vue 3 + ElementPlus) + WeChat mini-program (UniApp) dual-platform', 'Tencent CloudBase cloud functions for backend (zero ops, auto scaling)', 'Playwright E2E covering full workflows', 'P1/P2/P3 phased rollout + AGENTS.md / CLAUDE.md guiding AI-assisted dev']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/aisclab'
  }
];

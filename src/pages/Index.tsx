import { useState } from "react";
import {
  Shield,
  Zap,
  Eye,
  Clock,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Radio,
  Heart,
  MessageCircle,
  Share2,
  Repeat2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Войс</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Соцсеть нового поколения</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              Войти
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Регистрация
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                Войти
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Регистрация
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Radio className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["🔥", "🎵", "🌍", "⚡"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] text-xl"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Войс</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Лента</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["главная", "популярное", "подписки", "новости"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Голосовые комнаты</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Разговоры", "Стримы"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Алексей</div>
                <div className="text-[#b9bbbe] text-xs truncate">@alex_voice</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Mic className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область ленты */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">главная</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Голосовые посты, мысли вслух, живые обсуждения</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Посты */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветственное сообщение */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Войс</span>
                    <span className="text-[#5865f2] text-xs bg-[#5865f210] px-2 py-0.5 rounded">официальный</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня</span>
                  </div>
                  <p className="mb-3 sm:mb-4 text-[#dcddde] text-sm sm:text-base">
                    <strong>Добро пожаловать в Войс!</strong> Соцсеть, где каждый пост можно сказать вслух. Текст, голос, эмоции — всё в одном месте.
                  </p>
                  <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                    <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет Войс:</h3>
                    <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                      <li>🎤 Голосовые посты — говори, а не пиши</li>
                      <li>📝 Текстовые твиты — коротко и по делу</li>
                      <li>🔁 Репосты, лайки, ответы голосом</li>
                      <li>👥 Подписки и персональная лента</li>
                      <li>🌍 Открытая платформа для всех</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Голосовой пост */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Мария</span>
                    <span className="text-[#72767d] text-xs">@maria · 12 мин</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Только что записала первый голосовой пост — это так удобно! 😍
                  </div>

                  {/* Голосовое сообщение */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-xl p-3 sm:p-4 max-w-sm mb-3">
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#4752c4] transition-colors">
                        <Icon name="Play" size={16} className="text-white ml-0.5" />
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-1">
                          {[3,5,4,7,6,4,5,3,6,5,4,7,5,3,4].map((h, i) => (
                            <div
                              key={i}
                              className="bg-[#5865f2] rounded-full w-1"
                              style={{ height: `${h * 3}px` }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[#72767d] text-xs">
                          <span>0:00</span>
                          <span>0:23</span>
                        </div>
                      </div>
                      <Mic className="w-4 h-4 text-[#b9bbbe]" />
                    </div>
                  </div>

                  {/* Действия с постом */}
                  <div className="flex items-center gap-4 text-[#72767d]">
                    <button className="flex items-center gap-1 hover:text-[#5865f2] transition-colors text-xs sm:text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-[#3ba55c] transition-colors text-xs sm:text-sm">
                      <Repeat2 className="w-4 h-4" />
                      <span>12</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-[#ed4245] transition-colors text-xs sm:text-sm">
                      <Heart className="w-4 h-4" />
                      <span>148</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-[#5865f2] transition-colors text-xs sm:text-sm">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Текстовый пост */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">И</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Иван</span>
                    <span className="text-[#72767d] text-xs">@ivan_talks · 34 мин</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Войс — это Twitter, но живой. Слышишь интонацию, эмоцию, настроение человека. Текст так не умеет 🔥
                  </div>
                  <div className="flex items-center gap-4 text-[#72767d]">
                    <button className="flex items-center gap-1 hover:text-[#5865f2] transition-colors text-xs sm:text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>57</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-[#3ba55c] transition-colors text-xs sm:text-sm">
                      <Repeat2 className="w-4 h-4" />
                      <span>31</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-[#ed4245] transition-colors text-xs sm:text-sm">
                      <Heart className="w-4 h-4" />
                      <span>312</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-[#5865f2] transition-colors text-xs sm:text-sm">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA блок */}
              <div className="bg-[#2f3136] border border-[#5865f2] rounded-xl p-4 sm:p-6">
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">Присоединяйся к Войс</h2>
                <p className="text-[#b9bbbe] text-sm sm:text-base mb-4">
                  Говори свободно. Слушай людей. Будь услышан.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-8 py-2 rounded font-medium">
                    Создать аккаунт
                  </Button>
                  <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] px-6 py-2 rounded">
                    Узнать больше
                  </Button>
                </div>
              </div>

              {/* Фичи */}
              <div className="bg-[#2f3136] rounded-xl p-3 sm:p-4">
                <h3 className="text-white font-semibold mb-3 text-sm sm:text-base px-2">Почему Войс?</h3>
                <div className="space-y-1">
                  {[
                    {
                      icon: <Mic className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Голосовые посты",
                      desc: "Записывай и отправляй за секунды",
                    },
                    {
                      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Мгновенная лента",
                      desc: "Посты от людей, за которыми ты следишь",
                    },
                    {
                      icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Открытая платформа",
                      desc: "Читай без регистрации",
                    },
                    {
                      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "В реальном времени",
                      desc: "Живые обсуждения и реакции",
                    },
                    {
                      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Безопасность",
                      desc: "Твои данные только твои",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-3">
                <Mic className="w-5 h-5 text-[#5865f2]" />
                <div className="text-[#72767d] text-xs sm:text-sm flex-1">Запиши голосовой пост или напиши что-нибудь...</div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Онлайн — 4</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Мария",
                    status: "Записывает голосовой",
                    avatar: "М",
                    color: "from-purple-500 to-pink-500",
                  },
                  { name: "Иван", status: "В сети", avatar: "И", color: "from-green-500 to-blue-500" },
                  { name: "Алексей", status: "Слушает ленту", avatar: "А", color: "from-blue-500 to-purple-500" },
                  { name: "Катя", status: "Только что зашла", avatar: "К", color: "from-orange-500 to-red-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

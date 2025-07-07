import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Стильная футболка",
      price: 2990,
      image: "/img/ee63b8a9-3b01-4cca-8010-cc6dd679ee3c.jpg",
      category: "Футболки",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Джинсы Premium",
      price: 5990,
      image: "/img/ee63b8a9-3b01-4cca-8010-cc6dd679ee3c.jpg",
      category: "Джинсы",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Аксессуары",
      price: 1990,
      image: "/img/1a0cdf64-fe36-4a0f-b383-0ef6302d492e.jpg",
      category: "Аксессуары",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shirt" className="text-coral" size={32} />
              <h1 className="text-2xl font-bold text-gray-800">StyleStore</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-coral transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-coral transition-colors"
              >
                О нас
              </a>
              <a
                href="#products"
                className="text-gray-600 hover:text-coral transition-colors"
              >
                Товары
              </a>
              <a
                href="#delivery"
                className="text-gray-600 hover:text-coral transition-colors"
              >
                Доставка
              </a>
              <a
                href="#payment"
                className="text-gray-600 hover:text-coral transition-colors"
              >
                Оплата
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-r from-coral to-turquoise text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Стильная одежда для современной жизни
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Откройте для себя уникальную коллекцию модной одежды и
                аксессуаров
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-white text-coral hover:bg-gray-100"
                >
                  Посмотреть каталог
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-coral"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/e4a9a4a5-5a2d-424c-b6d8-56c07bca7eb3.jpg"
                alt="Fashion Model"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные товары</h2>
            <p className="text-gray-600 text-lg">
              Выберите из нашей коллекции стильной одежды
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        className="text-yellow fill-current"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-coral">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button className="bg-coral hover:bg-red-500">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О нас</h2>
              <p className="text-gray-600 mb-6">
                StyleStore — это современный интернет-магазин одежды и
                аксессуаров, который предлагает стильные и качественные товары
                для всех возрастов. Мы тщательно отбираем каждый товар, чтобы
                обеспечить наших клиентов лучшим качеством и последними трендами
                моды.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral mb-2">
                    5000+
                  </div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coral mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Товаров в каталоге</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://v3.fal.media/files/elephant/DmO62UYvbiT4vJGelLSVJ_output.png"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Доставка</h2>
            <p className="text-gray-600 text-lg">
              Быстрая и надежная доставка по всей России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Truck"
                  className="text-coral mx-auto mb-4"
                  size={48}
                />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Доставка в течение 1-3 дней по Москве и области
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Package"
                  className="text-mint mx-auto mb-4"
                  size={48}
                />
                <CardTitle>Бережная упаковка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Каждый товар упакован с особой заботой
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="MapPin"
                  className="text-turquoise mx-auto mb-4"
                  size={48}
                />
                <CardTitle>Отслеживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Возможность отследить заказ в реальном времени
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Оплата</h2>
            <p className="text-gray-600 text-lg">
              Удобные и безопасные способы оплаты
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="CreditCard"
                  className="text-coral mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-lg">Банковская карта</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Smartphone"
                  className="text-mint mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-lg">Мобильные платежи</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Wallet"
                  className="text-turquoise mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-lg">Электронные кошельки</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="HandCoins"
                  className="text-yellow mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-lg">При получении</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shirt" className="text-coral" size={24} />
                <h3 className="text-xl font-bold">StyleStore</h3>
              </div>
              <p className="text-gray-300">
                Стильная одежда для современной жизни
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-coral transition-colors">
                    Мужская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral transition-colors">
                    Женская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral transition-colors">
                    Аксессуары
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#about"
                    className="hover:text-coral transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#delivery"
                    className="hover:text-coral transition-colors"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#payment"
                    className="hover:text-coral transition-colors"
                  >
                    Оплата
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@stylestore.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 StyleStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

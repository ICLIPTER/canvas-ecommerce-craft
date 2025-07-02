import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  TrendingUp,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Plus,
  Eye,
  Edit,
  MoreHorizontal
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Admin = () => {
  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              StoreForge
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search anything..."
                className="pl-10 w-80"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-background border-r border-border min-h-screen">
          <nav className="p-4 space-y-2">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Dashboard
            </div>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="w-4 h-4 mr-3" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ShoppingCart className="w-4 h-4 mr-3" />
              Orders
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <Package className="w-4 h-4 mr-3" />
              Products
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="w-4 h-4 mr-3" />
              Customers
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="w-4 h-4 mr-3" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <DollarSign className="w-4 h-4 mr-3" />
              Finances
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Products</h1>
              <Button variant="default">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent">+2</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,426</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent">+15%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Orders</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent">+8%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent">+1.2%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Products Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Products</CardTitle>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Search products..." className="w-64" />
                    <Button variant="outline" size="sm">Filter</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Wireless Headphones", price: "$199", status: "Active", inventory: "24", image: "🎧" },
                    { name: "Smart Watch Pro", price: "$399", status: "Active", inventory: "12", image: "⌚" },
                    { name: "Laptop Stand", price: "$89", status: "Draft", inventory: "45", image: "💻" },
                    { name: "Phone Case", price: "$29", status: "Active", inventory: "156", image: "📱" },
                    { name: "Desk Lamp", price: "$79", status: "Active", inventory: "8", image: "💡" },
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-smooth">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-2xl">
                          {product.image}
                        </div>
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">Inventory: {product.inventory}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium">{product.price}</p>
                          <Badge variant={product.status === "Active" ? "default" : "secondary"}>
                            {product.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
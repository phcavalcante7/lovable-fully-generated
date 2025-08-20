import { StatsCards } from "@/components/StatsCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, Package, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - em um app real viria do banco de dados
const mockData = {
  totalProdutos: 324,
  produtosEmEstoque: 287,
  produtosBaixoEstoque: 12,
  valorTotalEstoque: 45680,
  produtosRecentes: [
    { id: 1, nome: "Camisa Polo Azul", categoria: "Camisas", estoque: 25, preco: 89.90 },
    { id: 2, nome: "Calça Jeans Slim", categoria: "Calças", estoque: 8, preco: 129.90 },
    { id: 3, nome: "Vestido Floral", categoria: "Vestidos", estoque: 15, preco: 159.90 },
    { id: 4, nome: "Tênis Casual", categoria: "Calçados", estoque: 3, preco: 199.90 },
  ],
  alertasEstoque: [
    { id: 1, nome: "Tênis Casual", categoria: "Calçados", estoque: 3, minimo: 10 },
    { id: 2, nome: "Camisa Social Branca", categoria: "Camisas", estoque: 2, minimo: 15 },
    { id: 3, nome: "Saia Midi", categoria: "Saias", estoque: 1, minimo: 8 },
  ]
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Visão geral do seu estoque de roupas
          </p>
        </div>
        <Link to="/adicionar-produto">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Produto
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <StatsCards
        totalProdutos={mockData.totalProdutos}
        produtosEmEstoque={mockData.produtosEmEstoque}
        produtosBaixoEstoque={mockData.produtosBaixoEstoque}
        valorTotalEstoque={mockData.valorTotalEstoque}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Produtos Recentes */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Package className="mr-2 h-5 w-5 text-primary" />
              Produtos Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.produtosRecentes.map((produto) => (
                <div key={produto.id} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div>
                    <h4 className="font-medium text-foreground">{produto.nome}</h4>
                    <p className="text-sm text-muted-foreground">{produto.categoria}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">
                      R$ {produto.preco.toFixed(2)}
                    </div>
                    <Badge variant={produto.estoque > 10 ? "default" : "destructive"} className="text-xs">
                      {produto.estoque} un.
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/produtos">
              <Button variant="outline" className="w-full mt-4">
                Ver Todos os Produtos
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Alertas de Estoque */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
              Alertas de Estoque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.alertasEstoque.map((alerta) => (
                <div key={alerta.id} className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <div>
                    <h4 className="font-medium text-foreground">{alerta.nome}</h4>
                    <p className="text-sm text-muted-foreground">{alerta.categoria}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-warning font-semibold">
                      {alerta.estoque} restantes
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mín: {alerta.minimo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 border-warning text-warning hover:bg-warning hover:text-warning-foreground">
              Ver Todos os Alertas
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
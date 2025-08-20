import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Package, AlertTriangle, DollarSign } from "lucide-react";

interface StatsCardsProps {
  totalProdutos: number;
  produtosEmEstoque: number;
  produtosBaixoEstoque: number;
  valorTotalEstoque: number;
}

export function StatsCards({
  totalProdutos,
  produtosEmEstoque,
  produtosBaixoEstoque,
  valorTotalEstoque,
}: StatsCardsProps) {
  const stats = [
    {
      title: "Total de Produtos",
      value: totalProdutos,
      icon: Package,
      change: "+12%",
      changeType: "increase" as const,
      description: "vs mês anterior",
    },
    {
      title: "Em Estoque",
      value: produtosEmEstoque,
      icon: TrendingUp,
      change: "+8%",
      changeType: "increase" as const,
      description: "produtos disponíveis",
    },
    {
      title: "Baixo Estoque",
      value: produtosBaixoEstoque,
      icon: AlertTriangle,
      change: "-3%",
      changeType: "decrease" as const,
      description: "precisam reposição",
    },
    {
      title: "Valor Total",
      value: valorTotalEstoque,
      icon: DollarSign,
      change: "+15%",
      changeType: "increase" as const,
      description: "em estoque",
      isPrice: true,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card hover:shadow-lg transition-all duration-300 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {stat.isPrice 
                ? `R$ ${stat.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` 
                : stat.value.toLocaleString('pt-BR')
              }
            </div>
            <div className="flex items-center text-xs">
              {stat.changeType === "increase" ? (
                <TrendingUp className="h-3 w-3 text-success mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-destructive mr-1" />
              )}
              <span
                className={
                  stat.changeType === "increase"
                    ? "text-success"
                    : "text-destructive"
                }
              >
                {stat.change}
              </span>
              <span className="text-muted-foreground ml-1">
                {stat.description}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
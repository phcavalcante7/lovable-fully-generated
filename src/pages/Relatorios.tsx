import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, FileText, Download } from "lucide-react";

export default function Relatorios() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
        <p className="text-muted-foreground mt-1">
          Análises e relatórios do seu estoque
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Relatório de Vendas */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              Relatório de Vendas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Análise detalhada das vendas por período, categoria e produto.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>

        {/* Relatório de Estoque */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <BarChart3 className="mr-2 h-5 w-5 text-primary" />
              Relatório de Estoque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Status atual do estoque, produtos em falta e alertas.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>

        {/* Relatório Financeiro */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              Relatório Financeiro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Valor total do estoque, custo médio e margem de lucro.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>

        {/* Relatório de Fornecedores */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              Relatório de Fornecedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Performance dos fornecedores e análise de compras.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Gerar Relatório
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
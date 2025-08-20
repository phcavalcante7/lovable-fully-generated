import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const categorias = [
  "Oversized",
  "Normal",
];

const tamanhos = ["P", "M", "G", "GG"];

export default function AdicionarProduto() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    categoria: "",
    tamanho: "",
    cor: "",
    preco: "",
    estoque: "",
    estoqueMinimo: "",
    descricao: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.categoria || !formData.preco) {
      toast({
        title: "Erro",
        description: "Por favor, preencha os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Aqui você salvaria no banco de dados
    console.log("Produto adicionado:", formData);
    
    toast({
      title: "Sucesso!",
      description: "Produto adicionado com sucesso.",
      className: "bg-success text-success-foreground",
    });

    // Limpar formulário
    setFormData({
      nome: "",
      categoria: "",
      tamanho: "",
      cor: "",
      preco: "",
      estoque: "",
      estoqueMinimo: "",
      descricao: "",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/produtos">
          <Button variant="outline" size="sm" className="border-border hover:bg-accent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Adicionar Produto</h1>
          <p className="text-muted-foreground mt-1">
            Cadastre um novo produto no seu estoque
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Informações Básicas */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Plus className="mr-2 h-5 w-5 text-primary" />
                Informações Básicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="nome" className="text-foreground">
                  Nome do Produto *
                </Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  placeholder="Ex: Camisa Polo Azul"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div>
                <Label htmlFor="categoria" className="text-foreground">
                  Categoria *
                </Label>
                <Select
                  value={formData.categoria}
                  onValueChange={(value) => handleInputChange("categoria", value)}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {categorias.map((categoria) => (
                      <SelectItem key={categoria} value={categoria}>
                        {categoria}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tamanho" className="text-foreground">
                    Tamanho
                  </Label>
                  <Select
                    value={formData.tamanho}
                    onValueChange={(value) => handleInputChange("tamanho", value)}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Tamanho" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {tamanhos.map((tamanho) => (
                        <SelectItem key={tamanho} value={tamanho}>
                          {tamanho}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cor" className="text-foreground">
                    Cor
                  </Label>
                  <Input
                    id="cor"
                    value={formData.cor}
                    onChange={(e) => handleInputChange("cor", e.target.value)}
                    placeholder="Ex: Azul"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="descricao" className="text-foreground">
                  Descrição
                </Label>
                <Textarea
                  id="descricao"
                  value={formData.descricao}
                  onChange={(e) => handleInputChange("descricao", e.target.value)}
                  placeholder="Descrição detalhada do produto..."
                  className="bg-background border-border min-h-20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Preço e Estoque */}
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Preço e Estoque</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="preco" className="text-foreground">
                  Preço de Venda *
                </Label>
                <Input
                  id="preco"
                  type="number"
                  step="0.01"
                  value={formData.preco}
                  onChange={(e) => handleInputChange("preco", e.target.value)}
                  placeholder="0,00"
                  className="bg-background border-border"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="estoque" className="text-foreground">
                    Quantidade em Estoque
                  </Label>
                  <Input
                    id="estoque"
                    type="number"
                    value={formData.estoque}
                    onChange={(e) => handleInputChange("estoque", e.target.value)}
                    placeholder="0"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="estoqueMinimo" className="text-foreground">
                    Estoque Mínimo
                  </Label>
                  <Input
                    id="estoqueMinimo"
                    type="number"
                    value={formData.estoqueMinimo}
                    onChange={(e) => handleInputChange("estoqueMinimo", e.target.value)}
                    placeholder="0"
                    className="bg-background border-border"
                  />
                </div>
              </div>


              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Produto
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
}
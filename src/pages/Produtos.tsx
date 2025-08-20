import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Edit, Trash2, Package } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - em um app real viria do banco de dados
const mockProdutos = [
  {
    id: 1,
    nome: "Camisa Polo Azul",
    categoria: "Camisas",
    tamanho: "M",
    cor: "Azul",
    preco: 89.90,
    estoque: 25,
    estoqueMinimo: 10,
    fornecedor: "Confecções ABC",
  },
  {
    id: 2,
    nome: "Calça Jeans Slim",
    categoria: "Calças",
    tamanho: "38",
    cor: "Azul Escuro",
    preco: 129.90,
    estoque: 8,
    estoqueMinimo: 15,
    fornecedor: "Jeans & Co",
  },
  {
    id: 3,
    nome: "Vestido Floral",
    categoria: "Vestidos",
    tamanho: "P",
    cor: "Floral",
    preco: 159.90,
    estoque: 15,
    estoqueMinimo: 8,
    fornecedor: "Moda Feminina",
  },
  {
    id: 4,
    nome: "Tênis Casual",
    categoria: "Calçados",
    tamanho: "42",
    cor: "Branco",
    preco: 199.90,
    estoque: 3,
    estoqueMinimo: 10,
    fornecedor: "Calçados Sport",
  },
  {
    id: 5,
    nome: "Blusa de Tricot",
    categoria: "Blusas",
    tamanho: "G",
    cor: "Rosa",
    preco: 79.90,
    estoque: 22,
    estoqueMinimo: 12,
    fornecedor: "Tricot Fashion",
  },
];

export default function Produtos() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProdutos = mockProdutos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (estoque: number, estoqueMinimo: number) => {
    if (estoque === 0) {
      return <Badge variant="destructive">Sem Estoque</Badge>;
    } else if (estoque <= estoqueMinimo) {
      return <Badge className="bg-warning text-warning-foreground">Baixo Estoque</Badge>;
    } else {
      return <Badge className="bg-success text-success-foreground">Em Estoque</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Produtos</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie seu estoque de roupas
          </p>
        </div>
        <Link to="/adicionar-produto">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Produto
          </Button>
        </Link>
      </div>

      {/* Search and Stats */}
      <Card className="bg-card border-border/50">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center text-foreground">
              <Package className="mr-2 h-5 w-5 text-primary" />
              Lista de Produtos
            </CardTitle>
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="text-foreground font-semibold">Produto</TableHead>
                  <TableHead className="text-foreground font-semibold">Categoria</TableHead>
                  <TableHead className="text-foreground font-semibold">Tamanho</TableHead>
                  <TableHead className="text-foreground font-semibold">Cor</TableHead>
                  <TableHead className="text-foreground font-semibold">Preço</TableHead>
                  <TableHead className="text-foreground font-semibold">Estoque</TableHead>
                  <TableHead className="text-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-foreground font-semibold">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProdutos.map((produto) => (
                  <TableRow key={produto.id} className="hover:bg-accent/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{produto.nome}</div>
                        <div className="text-sm text-muted-foreground">{produto.fornecedor}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground">{produto.categoria}</TableCell>
                    <TableCell className="text-foreground">{produto.tamanho}</TableCell>
                    <TableCell className="text-foreground">{produto.cor}</TableCell>
                    <TableCell className="text-foreground font-semibold">
                      R$ {produto.preco.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <div className="text-foreground font-medium">{produto.estoque} un.</div>
                      <div className="text-xs text-muted-foreground">
                        Min: {produto.estoqueMinimo}
                      </div>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(produto.estoque, produto.estoqueMinimo)}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredProdutos.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Nenhum produto encontrado.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
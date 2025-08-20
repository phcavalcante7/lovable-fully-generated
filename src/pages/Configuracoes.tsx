import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings, Bell, Shield, Database } from "lucide-react";

export default function Configuracoes() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
        <p className="text-muted-foreground mt-1">
          Personalize as configurações do sistema
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Configurações Gerais */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Settings className="mr-2 h-5 w-5 text-primary" />
              Configurações Gerais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="loja-nome" className="text-foreground">
                Nome da Loja
              </Label>
              <Input
                id="loja-nome"
                defaultValue="Minha Loja de Roupas"
                className="bg-background border-border"
              />
            </div>
            <div>
              <Label htmlFor="moeda" className="text-foreground">
                Moeda Padrão
              </Label>
              <Input
                id="moeda"
                defaultValue="BRL"
                className="bg-background border-border"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Salvar Alterações
            </Button>
          </CardContent>
        </Card>

        {/* Notificações */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Bell className="mr-2 h-5 w-5 text-primary" />
              Notificações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="alerta-estoque" className="text-foreground">
                Alertas de Estoque Baixo
              </Label>
              <Switch id="alerta-estoque" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-relatorios" className="text-foreground">
                Relatórios por Email
              </Label>
              <Switch id="email-relatorios" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notif-vendas" className="text-foreground">
                Notificações de Vendas
              </Label>
              <Switch id="notif-vendas" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Segurança */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Shield className="mr-2 h-5 w-5 text-primary" />
              Segurança
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="senha-atual" className="text-foreground">
                Senha Atual
              </Label>
              <Input
                id="senha-atual"
                type="password"
                className="bg-background border-border"
              />
            </div>
            <div>
              <Label htmlFor="nova-senha" className="text-foreground">
                Nova Senha
              </Label>
              <Input
                id="nova-senha"
                type="password"
                className="bg-background border-border"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Alterar Senha
            </Button>
          </CardContent>
        </Card>

        {/* Backup */}
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <Database className="mr-2 h-5 w-5 text-primary" />
              Backup dos Dados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Faça backup regular dos seus dados para garantir a segurança das informações.
            </p>
            <div className="flex items-center justify-between">
              <Label htmlFor="backup-auto" className="text-foreground">
                Backup Automático
              </Label>
              <Switch id="backup-auto" defaultChecked />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Fazer Backup Agora
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
# Cobra+

> Sistema moderno e eficiente para gestão de cobranças, clientes e contratos.

O Cobra+ é uma plataforma desenvolvida para simplificar o controle financeiro, oferecendo uma visão clara de métricas, vencimentos diários e gerenciamento de contratos.

---

## Tecnologias Utilizadas

O projeto foi construído com as ferramentas do ecossistema Frontend:

* **React** — Biblioteca para construção de interfaces.
* **TypeScript** — Tipagem estática para maior segurança.
* **Vite** — Build tool para desenvolvimento rápido.
* **Tailwind CSS** — Framework utilitário para estilização.

---

## Funcionalidades

### Em Progresso / Desenvolvidas
* [x] Estrutura inicial do frontend configurada.
* [x] Layout base com Sidebar e Área Principal.
* [x] Módulo de Dashboard estruturado.
* [x] Cards com métricas financeiras principais.
* [x] Lista detalhada de cobranças do dia.
* [ ] Módulo para gestão completa de clientes.
* [ ] Controle de contratos e parcelamentos.

---

## Estrutura de Pastas

A arquitetura do projeto segue uma divisão modular dentro do diretório src/:

```text
src/
├── app/                  # Configurações globais e rotas
└── modules/              # Módulos de negócio da aplicação
    ├── dashboard/        # Módulo de indicadores e resumos
    │   └── pages/        # Páginas específicas do dashboard
    └── shared/           # Recursos compartilhados entre módulos
        ├── components/   # Componentes globais (layout, ui)
        ├── assets/       # Imagens e mídias estáticas
        ├── styles/       # Estilizações globais e Tailwind
        └── types/        # Definições de tipos TypeScript
```

---

## Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   O Vite abrirá a aplicação no endereço fornecido no terminal (geralmente http://localhost:5173).

---

## Observações

* **Status:** Projeto atualmente em desenvolvimento.
* **Flexibilidade:** Decisões de arquitetura, design e ferramentas da stack ainda podem sofrer alterações conforme a evolução do sistema.

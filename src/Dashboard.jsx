function Dashboard(){
    return(
        <div className="min-h-screen bg-gray-100 flex  flex-col">
          {/* min-h-screen: ocupa o minimo da altura da tela inteira 
            bg-gray-100: cor de fundo cinza claro
            flex flex-col: layout principal em coluna (cabeçalho em cima,)*/}
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
                {/* bg-blue-600: cor de fundo, azul escuro
                text-white: cor do texto
                p-4: padding interno do item
                flex: ativa o flexbox
                justify-between: separa a logo e o menu nos extremos
                items-center: centralizando verticalmente os items
                shadow: adiciona sombra ao cabeçalho*/}
                <h1 className="text-2xl font-bold">Painel Administrativo</h1>
                {/*
                text-2xl: tamanho do texto, neste caso 2x maior que o normal
                font-bold: texto em negrito*/}
                <nav className="flex gap-4">
                    <a href="#" className="hover:underline">Inicio</a>
                    <a href="#" className="hover:underline">Usuarios</a>
                    <a href="#" className="hover:underline">Relatorios</a>
                </nav>
            </header>
            {/*Layout com menu lateral e o conteudo principal */}
            <div className="flex flex-1">
                {/* 
                flex: cria um layout em linha
                flex-1: ocupa todo o espaço disponivel abaixo do cabeçalho
                */}
                {/*Menu lateral */}
                <aside className="w-64 bg-white p-6 border-r hidenn md:block">
                {/*
                w-64: largura fixa do menu lateral
                bg-white: cor de fundo
                p-6: padding interno
                border-r: criar a borda direita
                hidenn md:block: escondido no mobile, visivel em telas medias para cima*/}
                <ul className="space-y-4">
                    {/* 
                    space-y-4: espaçamento vertical entre os items da lista não ordenada*/}
                    <li>
                        <a href="#" className="block p-2 rounded hover:bg-gray-100">Dashboard</a>
                        <a href="#" className="block p-2 rounded hover:bg-gray-100">Clientes</a>
                        <a href="#" className="block p-2 rounded hover:bg-gray-100">Configurações</a>
                    </li>

                </ul>
                </aside>
                {/* Conteudo principal*/}
                <main className="flex-1 p-6">
                    <h2 className="text-xl font-semibold mb-6">Resumo</h2>
                    {/*Grid de Cards*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/*
                        grid: ativa o layout em grid
                        grid-cols-1: serve para telas pequenas, apenas 1 coluna
                        grid-cols-2: para telas médias, apenas 2 colunas
                        grid-cols-3: para telas grandes, 3 colunas*/}
                        <div className="bg-white p-4 rounded lg shadow hover:shadow lg transition">
                            {/* Card 1 */}
                        <h3 className="text-lg font-bold mb:2">Usuarios ativos</h3>
                        <p className="text-gray-600">1.245</p>
                        </div>
                         <div className="bg-white p-4 rounded lg shadow hover:shadow lg transition">
                            {/* Card 2 */}
                        <h3 className="text-lg font-bold mb:2">Novos clientes</h3>
                        <p className="text-gray-600">320 este mês</p>
                        </div>
                         <div className="bg-white p-4 rounded lg shadow hover:shadow lg transition col-span-1">
                            {/* Card 3 ocupa mais espaço em tela grande */}
                        <h3 className="text-lg font-bold mb:2">Vendas</h3>
                        <p className="text-gray-600">45.800</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard
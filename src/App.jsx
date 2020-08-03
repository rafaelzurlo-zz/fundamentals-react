import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmentos'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={8.5} />
            </Card>

            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>
        </div>
    </div>
)
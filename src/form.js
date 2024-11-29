const form = document.getElementById('form')
const resultado = document.getElementById('resultado')

let valido = true
let mensagens = []

function validation() {
    const idade = parseInt(document.getElementById('idade').value)
    const genero = document.querySelector('input[name="genero"]:checked').value
    const peso = parseInt(document.getElementById('peso').value)
    const saude = document.querySelector('input[name="saude"]:checked').value

    const resfriado = document.querySelector('input[name="resfriado"]:checked').value
    const gestante = document.querySelector('input[name="gestante"]:checked').value
    const procedimentosEsteticos = document.querySelector('input[name="procedimentos-esteticos"]:checked').value
    const procedimentosMedicos = document.querySelector('input[name="procedimentos-medicos"]:checked').value
    const vacinas = document.querySelector('input[name="vacinas"]:checked').value
    const regioesEndemicas = document.querySelector('input[name="regioes-endemicas"]:checked').value
    const herpes = document.querySelector('input[name="herpes"]:checked').value
    const covid = document.querySelector('input[name="covid"]:checked').value

    const hepatite = document.querySelector('input[name="hepatite"]:checked').value
    const doencasInfecciosas = document.querySelector('input[name="doencas-infecciosas"]:checked').value
    const drogas = document.querySelector('input[name="drogas"]:checked').value
    const neuro = document.querySelector('input[name="neuro"]:checked').value

    const doou = document.querySelector('input[name="doou"]:checked').value
    const dataUltimaDoacao = new Date(document.getElementById('tempo-doacao').value)
    
    if (idade > 0 && idade >= 16 && idade < 18) {
        mensagens.push('Se você tem entre 16 e 18 anos, é possível doar sangue com a autorização dos pais ou responsáveis.')
    } else if (idade >= 18 && idade < 60) {
    } else if (idade >= 60 && idade <= 69) {
        mensagens.push('Pessoas com até 69 anos podem doar sangue, desde que a primeira doação tenha ocorrido antes dos 60 anos.')
    } else {
        valido = false
        mensagens.push('Pessoas menores de 16 anos e maiores de 69 anos não estão aptas a doar sangue.')
    }

    if (!peso || peso < 50) {
        valido = false
        mensagens.push('É necessário ter no mínimo 50kg para poder doar sangue.')
    }

    if (!saude || saude === 'nao') {
        valido = false
        mensagens.push('É fundamental estar em boas condições de saúde para realizar a doação de sangue.')
    }

    if (!resfriado || resfriado === 'sim') {
        valido = false
        mensagens.push('É necessário aguardar 7 dias após o desaparecimento dos sintomas de resfriado para realizar a doação de sangue.')
    }

    if (!gestante || gestante === 'sim') {
        valido = false
        mensagens.push('Após o parto, é necessário esperar 90 dias para doar sangue em caso de parto normal e 180 dias após uma cesariana. Além disso, não é possível doar durante o período de amamentação se o parto ocorreu há menos de 12 meses.')
    }

    if (!procedimentosEsteticos || procedimentosEsteticos === 'sim') {
        valido = false
        mensagens.push('Caso procedimentos estéticos como tatuagem, maquiagem definitiva, micropigmentação, entre outros, tenham sido realizados em um estabelecimento seguro e com todos os cuidados necessários, é possível doar sangue após 6 meses. Se não houver essas condições, é necessário aguardar 12 meses. No caso de piercings ou brincos, se forem feitos em locais sem mucosa e em estabelecimentos apropriados, a doação pode ser feita após 6 meses. Caso contrário, é necessário aguardar 12 meses.')
    }

    if(!procedimentosMedicos || procedimentosMedicos === 'sim') {
        valido = false
        mensagens.push('No caso de procedimentos endoscópicos (como endoscopia digestiva alta, colonoscopia, rinoscopia, entre outros), é necessário aguardar 6 meses para doar sangue. Para extração dentária e tratamento de canal, é preciso aguardar 7 dias. Em casos de cirurgia odontológica com anestesia geral, o prazo de espera é de 4 semanas. Para acupuntura, caso tenha sido realizada em local seguro e com material descartável, é necessário aguardar 24 horas. Se o procedimento não for seguro, o prazo de espera é de 6 meses. Caso a acupuntura tenha sido realizada com laser ou sementes, é possível realizar a doação imediatamente.')
    }

    if (!vacinas || vacinas === 'sim') {
        valido = false
        mensagens.push('Após a vacina contra a gripe, é necessário aguardar 48 horas para doar sangue. No caso da vacina contra a Covid-19, o prazo de espera é de 7 dias. Já para a vacina contra a dengue, é preciso aguardar 4 semanas antes de realizar a doação.')
    }

    if (!regioesEndemicas || regioesEndemicas === 'sim') {
        valido = false
        mensagens.push('Viagens ao exterior para os Estados Unidos ou regiões com surto de Febre Amarela impedem a doação de sangue por 30 dias após o retorno. Quem morou na Europa após 1980 deve verificar a aptidão para doação pelo Alô Pró-Sangue, pelo telefone (11) 4573-7800. No caso da malária, quem esteve em estados brasileiros com alta prevalência (como Acre, Amapá, Amazonas, Rondônia, Roraima, Maranhão, Mato Grosso, Pará e Tocantins) ou em países endêmicos, deve aguardar 30 dias após o retorno para doar sangue. Para a Febre Amarela, quem esteve em uma região com surto da doença deve aguardar 30 dias para doar após o retorno. Se a pessoa tomou a vacina, o prazo de espera é de 4 semanas, e se contraiu a doença, deve aguardar 6 meses após a recuperação completa (clínica e laboratorial).')
    }

    if (!herpes || herpes === 'sim') {
        valido = false
        mensagens.push('No caso de herpes labial ou genital, é possível doar sangue após o desaparecimento total das lesões. Já no caso de herpes zoster, a doação pode ser realizada após 6 meses da cura.')
    }

    if (!covid || covid === 'sim') {
        valido = false
        mensagens.push('Candidatos que apresentaram diagnóstico ou suspeita de Covid-19 estão aptos a doar 1 semana após a cura. Candidatos assintomáticos com teste positivo podem doar após 10 dias da data de realização do teste. Aqueles que tiveram contato com casos positivos de Covid-19 podem doar após 7 dias do último contato. Candidatos que fizeram isolamento voluntário ou por orientação médica estão aptos a doar após o término do período de isolamento recomendado. No caso de dengue não hemorrágica, é possível doar 4 semanas após a cura. Já para dengue hemorrágica, a doação pode ser realizada 6 meses após a recuperação completa. Profissionais de saúde estão aptos a doar, desde que estejam utilizando corretamente os Equipamentos de Proteção Individual (EPIs).')
    }

    if(!hepatite || hepatite === 'sim') {
        valido = false
        mensagens.push('Em casos de hepatite após o 11º aniversário, a recusa é definitiva. Para hepatite B ou C, seja antes ou após os 10 anos, a recusa também é definitiva. No caso de hepatite causada por medicamento, o candidato está apto a doar após a cura, sendo necessário uma avaliação clínica. Para hepatite viral (A), após os 11 anos de idade, se o candidato apresentar o exame de diagnóstico da doença, será avaliado pelo médico da triagem.')
    }

    if (!doencasInfecciosas || doencasInfecciosas === 'sim') {
        valido = false
        mensagens.push('A evidência clínica ou laboratorial das seguintes doenças infecciosas transmissíveis pelo sangue impossibilita a doação: Hepatites B e C, AIDS ou vírus HIV, doenças associadas aos vírus HTLV I e II e Doença de Chagas.')
    }

    if (!drogas || drogas === 'sim') {
        valido = false
        mensagens.push('Pessoas que fizeram uso de drogas ilícitas injetáveis não estão aptas para a doação de sangue.')
    }

    if (!neuro || neuro === 'sim') {
        valido = false
        mensagens.push('Pessoas com Doença de Parkinson não estão aptas a doar sangue.')
    }

    if (!doou) {
        valido = false
    } else {
        const dataAtual = new Date();

        const diferencaMs = dataAtual - dataUltimaDoacao
        const diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24))

        if (genero === 'masculino' && doou === 'sim' && diferencaDias < 60) {
            valido = false
            mensagens.push('Homens devem aguardar pelo menos 60 dias após a última doação para realizar uma nova doação de sangue.')
        }

        if (genero === 'feminino' && doou === 'sim' && diferencaDias < 90) {
            valido = false
            mensagens.push('Mulheres devem aguardar pelo menos 90 dias após a última doação para realizar uma nova doação de sangue.')
        }

        console.log(mensagens)
    }
}

function limparResultado() {
    valido = true
    mensagens = []
    resultado.innerHTML = `
        <h2 id="resultado__titulo"></h2>
        <p style="text-align: center;">Embora o formulário indique se você está apto ou não a doar sangue, na triagem realizada no local de doação, a equipe avaliará outros fatores importantes, como o seu estado de saúde no momento, que podem impedir a doação. Esse procedimento garante a segurança tanto para você quanto para o receptor.</p>
        `
}


form.addEventListener('submit', function(evento) {
    evento.preventDefault()
    limparResultado()

    // const values = document.querySelectorAll('input')
    const resultadoTitulo = document.getElementById('resultado__titulo')

    validation()

    // values.forEach(function(value) {
    //     value.value = ''
    // })

    form.reset()

    resultado.style.display = 'flex'

    if (valido === true) {
        resultadoTitulo.innerText = 'Você está apto à doar sangue!'

        if (mensagens.length != 0) {
            const p = document.createElement('p')
            p.innerText = 'Observações:'
            resultado.appendChild(p)
        }
    } else {
        resultadoTitulo.innerText = 'Com base nas informações fornecidas, você não pode doar sangue no momento.'

        const p = document.createElement('p')
        p.innerText = 'Confira abaixo os motivos:'
        resultado.appendChild(p)
    }

    if (mensagens.length != 0) {
        const ul = document.createElement('ul')
        resultado.appendChild(ul)

        mensagens.forEach(function(mensagem) {
            const li = document.createElement('li')
            li.innerText = mensagem
            ul.appendChild(li)
        })
    }
})

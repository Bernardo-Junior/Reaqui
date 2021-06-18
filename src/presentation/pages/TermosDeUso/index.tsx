import React from 'react';
import { Platform } from 'react-native';
import { View } from 'react-native';
import { 
  Global_Container,
  Global_Scroll,
  Global_Tertiary,
} from '../../../utils/global';

import resp from '../../../utils/responsivity';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import StatusBar from '../../components/StatusBar';

import { 
  Titulo_Text,
  Conteudo_Text,
  Icon_Container
} from './styles';
import { useNavigation } from '@react-navigation/native';

const TermosDeUso: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <> 
      {
        Platform.OS === "ios" && (
          <StatusBar />
        )
      }
      <Global_Container>
        <Global_Scroll>
          <Icon_Container onPress={() => { goBack() }}>
            <Ionicons 
              name="arrow-back-outline"
              color={`${Global_Tertiary}`}
              size={resp(40)}
            />
          </Icon_Container>
          <Titulo_Text>
          TERMOS DE USO DO APLICATIVO E POLÍTICA DE PRIVACIDADE
          </Titulo_Text>

          <Conteudo_Text>
          A seguir estão descritas as regras aplicáveis à utilização do APLICATIVO REAQUI – disponibilizado pelo INSTITUTO DE CIÊNCIAS EXATAS E TECNOLOGIA (ICET) para dispositivos móveis com sistemas Android e iOS.
          {`\n\n`}Ao realizar o acesso ao aplicativo, o usuário se submeterá automaticamente às regras e condições destes Termos de Uso.
          {`\n\n`}O uso do aplicativo deve ser feito em caráter pessoal e intransferível. Não é permitido compartilhamento do aplicativo em qualquer site ou ambiente virtual.
          {`\n\n`}O ICET poderá, sem prévio aviso, bloquear e cancelar o acesso ao aplicativo quando verificar que o usuário praticou algum ato ou mantenha conduta que (i) viole as leis e regulamentos federais, estaduais e/ou municipais, (ii) contrarie as regras destes Termos de Uso, ou (iii) viole os princípios da moral e dos bons costumes.
          {`\n\n`}Toda e qualquer ação executada ou conteúdo publicado pelo usuário durante o uso do aplicativo será de sua exclusiva e integral responsabilidade, devendo isentar e indenizar o ICET de quaisquer reclamações, prejuízos, perdas e danos causados ao ICET, em decorrência de tais ações ou manifestações.
          {`\n\n`}O usuário autoriza o ICET, ou terceiros por ela indicados, a utilizar, por prazo indeterminado, as informações fornecidas durante o uso do aplicativo para fins estatísticos.
          {`\n\n`}O ICET se reserva do direito de incluir, excluir ou alterar os conteúdos e funcionalidades do aplicativo, bem como suspendê-lo temporariamente ou cancelá-lo, a qualquer momento, independentemente de aviso-prévio ao usuário. Da mesma forma, poderá modificar estes Termos de Uso, cuja versão mais recente estará sempre disponível para consulta no próprio aplicativo.
          {`\n\n`}O ICET SE EXIME DE TODA E QUALQUER RESPONSABILIDADE PELOS DANOS E PREJUÍZOS DE QUALQUER NATUREZA QUE POSSAM DECORRER DO ACESSO, INTERCEPTAÇÃO, ELIMINAÇÃO, ALTERAÇÃO, MODIFICAÇÃO OU MANIPULAÇÃO, POR TERCEIROS NÃO AUTORIZADOS, DOS DADOS DO USUÁRIO DURANTE A UTILIZAÇÃO DO APLICATIVO.
          {`\n\n`}As informações solicitadas ao Usuário no momento do acesso e uso do aplicativo serão utilizadas pelo ICET somente para os fins previstos nestes Termos de Uso e em nenhuma circunstância, tais informações serão cedidas ou compartilhadas com terceiros, exceto por ordem judicial ou de autoridade competente.
          </Conteudo_Text>
          <Conteudo_Text style={{fontWeight: 'bold', textAlign: 'left'}}>
          Da licença de uso do APLICATIVO:
          </Conteudo_Text>
          <Conteudo_Text>
          1.	Concessão da Licença: O ICET neste ato e pela melhor forma de direito, outorga ao usuário uma licença de uso do APLICATIVO, em caráter não exclusivo e intransferível, para a utilização em seu dispositivo móvel de acordo com as condições estabelecidas nesta licença de uso;
          {`\n\n`}2.	Proteção contra cópia ou uso indevido: O ICET poderá utilizar-se de mecanismos de inibição da cópia, instalação ou utilização indevida do APLICATIVO, bem como mecanismos de controle de uso dentro do limite de dispositivos móveis permitidos.
          {`\n\n`}3.	O início de utilização do APLICATIVO implica em aceitar todos os termos e condições desta licença. Caso o usuário não concorde com os termos e condições estipulados nesta licença de uso, deverá interromper imediatamente a utilização do APLICATIVO.
          {`\n\n`}4.	LIMITAÇÃO DE RESPONSABILIDADE: O usuário declara, reconhece e aceita que: a) o REAQUI não foi desenvolvido sob encomenda do usuário, mas para uso genérico, razão pela qual o ICET não pode garantir que o bem atenderá as necessidades específicas do usuário; b) as configurações de suas dispositivos e servidores estão de acordo com os requisitos mínimos necessários para a instalação e utilização do REAQUI; c) O ICET isenta-se expressamente de quaisquer responsabilidades e indenizações, perdas e danos, lucros cessantes, prejuízos de quaisquer espécies, sob quaisquer títulos, perdas de negócios, perda ou extravio de dados, defeitos no dispositivo móvel, equipamentos ou periféricos, ou quaisquer outros danos diretos, indiretos, acidentais, especiais, consequenciais ou punitivos causados ao usuário ou a terceiros, decorrentes direta ou indiretamente, da aquisição e/ou da indevida utilização do APLICATIVO e de atos praticados em desacordo com a legislação em vigor por parte do usuário ou de seus prepostos/funcionários causados ao usuário ou a terceiros.

          </Conteudo_Text>
        </Global_Scroll>
      </Global_Container>
    </>
  )
}

export default TermosDeUso;
import  React ,  {  useState ,  useRef  }  de  ' react ' ;
import  {  View ,  ScrollView ,  Text ,  StyleSheet ,  Dimensions ,  ImageBackground , 
  TextInput ,  TouchableOpacity ,  Image  }  de  'react-native' ;
importar  carrossel  de  'react-native-snap-carousel' ;

importar  ícone  de  'react-native-vector-icons / MaterialIcons' ;

const  { width : screenWidth ,  height : screenHeight }  =  Dimensões . get ( 'janela' ) ;

 função padrão de  exportação App ( ) {  
  const  carouselRef  =  useRef ( null ) ;

  const  [ lista ,  setLista ]  =  useState ( [
    {
        título : "O Justiceiro" ,
        texto : "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará conhecido conhecido como O Justiceiro" ,
        lançamento : 2018 ,
        img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
    } ,
    {
        título : "Bad Boys para a vida" ,
        texto : "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade." ,
        lançamento : 2020 ,
        img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
    } ,
    {
        título : "Viúva Negra" ,
        texto : "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para tornar seu agente definitiva." ,
        lançamento : 2020 ,
        img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
    } ,
    {
        título : "Top Gun: MAVERICK" ,
        texto : "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas. " ,
        lançamento : 2020 ,
        img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
    } ,
    {
        título : "BloodShot" ,
        texto : "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear." ,
        lançamento : 2020 ,
        img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
    } ,
    {
        título : "Free Guy" ,
        texto : "Um caixa de banco preso a uma rotina entediante tem sua vida virada de cabeça para baixo quando ele descobre que o personagem em um brutalmente realista jogo de vídeo de mundo aberto." ,
        lançamento : 2020 ,
        img : 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    } ,
  ] ) ;
  const  [ background ,  setBackground ]  =  useState ( lista [ 0 ] . img ) ;
  const  [ activeIndex ,  setActiveIndex ]  =  useState ( 0 ) ;

  const  _renderItem  =  ( { item , índice } )  =>  {
    return (
      < Ver >
        < TouchableOpacity >
          < Imagem
          fonte = { { uri : item . img } }
          estilo = { estilos . carouselImg }
          / >
          < Estilo do texto  = { estilos . carouselText } > { item . título } < / Texto >
          < Ícone 
          name = "play-circle-outline" 
          tamanho = { 30 }  cor = "#FFF" 
          estilo = { estilos . carouselIcon } 
          / >
        < / TouchableOpacity >
      < / Ver >
    ) ;
  } ;

 return  (
   < Estilo ScrollView  = { estilos . container } >
     < View  style = { { flex : 1 ,  height : screenHeight } } >
        < Exibir  estilo = { { ... StyleSheet . absolutoFill ,  backgroundColor : '# 000' } } >  
          < ImageBackground
          fonte = { {  uri : fundo } }
          estilo = { estilos . imgBg }
          blurRadius = { 8 }
          >

            < Exibir  estilo = { estilos . viewSearch } >
              < TextInput
                estilo = { estilos . input }
                placeholder = "Procurando algo?"
              / >
              < Estilo TouchableOpacity  = { estilos . ícone } >
                < Icon  name = "search"  color = "# 000"  size = { 25 }  / >
              < / TouchableOpacity >
            < / Ver >

            < Texto 
            style = { { color : '#FFF' ,  fontSize : 25 ,  fontWeight : 'bold' , 
            marginLeft : 10 ,  marginVertical : 10 ,  } }
            >
              Acabou de chegar
            < / Texto >

            < Exibir  estilo = { estilos . slideView } >
              < Carrossel
              estilo = { estilos . carrossel }
              ref = { carouselRef }
              dados = { lista }
              renderItem = { _renderItem }
              sliderWidth = { screenWidth }
              itemWidth = { 200 }
              inactiveSlideOpacity = { 0,5 }
              onSnapToItem = {  ( índice )  =>  {
                setBackground ( lista [ índice ] . img ) ;
                setActiveIndex ( índice ) ;
              } }
              / >
            < / Ver >

            < Exibir  estilo = { estilos . moreInfo } >
              < Estilo de visualização  = { { marginTop : 10 } } >
                < Estilo do texto  = { estilos . movieTitle } > { lista [ activeIndex ] . título } < / Texto >
                < Estilo do texto  = { estilos . movieDesc } > { lista [ activeIndex ] . texto } < / Texto >
              < / Ver >
              < TouchableOpacity 
              estilo = { {  marginRight : 15 ,  marginTop : 10  } } 
              onPress = { ( )  =>  alerta ( 'CLICOU' ) }
              >
                < Ícone 
                nome = "fila" 
                color = "# 131313" 
                tamanho = { 30 } 
                / >
              < / TouchableOpacity >
            < / Ver >

          < / ImageBackground >
        < / Ver >
     < / Ver >
   < / ScrollView >
  ) ;
}

 estilos  const =  StyleSheet . criar ( {
  container : {
    flex : 1 ,
  } ,
  imgBg : {
    flex : 1 ,
    largura : nulo ,
    altura : nulo ,
    opacidade : 1 ,
    justifyContent : "flex-start" ,
    backgroundColor : '# 000'
  } ,
  viewSearch : {
    marginTop : 20 ,
    backgroundColor : '#FFF' ,
    elevação : 10 ,
    borderRadius : 5 ,
    marginVertical : 10 ,
    largura : '95% ' ,
    flexDirection : 'row' ,
    alignSelf : 'center'
  } ,
  input : {
    largura : '90% ' ,
    preenchimento : 13 ,
    paddingLeft : 20 ,
    fontSize : 17 ,
  } ,
  ícone : {
    posição : 'absoluta' ,
    certo : 20 ,
    topo : 15 ,
  } ,
  slideView : {
    largura : '100%' ,
    altura : 350 ,
    justifyContent : 'center' ,
    alignItems : 'center'
  } ,
  carrossel : {
    flex : 1 ,
    estouro : 'visível'
  } ,
  carrosselImg : {
    alignSelf : 'center' ,
    largura : 200 ,
    altura : 300 ,
    borderRadius : 12 ,
    backgroundColor : 'rgba (0,0,0,0.5)'
  } ,
  carouselText : {
    preenchimento : 15 ,
    cor : '#FFF' ,
    posição : 'absoluta' ,
    inferior : 10 ,
    esquerda : 2 ,
    fontWeight : 'negrito'
  } ,
  carouselIcon : {
    posição : 'absoluta' ,
    topo : 15 ,
    certo : 15 ,
  } ,
  moreInfo : {
    backgroundColor : '#FFF' ,
    largura : screenWidth ,
    height : screenHeight ,
    borderTopRightRadius : 20 ,
    borderTopLeftRadius : 20 ,
    flexDirection : 'row' ,
    justifyContent : 'space-around' ,
  } ,
  movieTitle : {
    paddingLeft : 15 ,
    fontSize : 22 ,
    fontWeight : 'negrito' ,
    cor : '# 131313' ,
    marginBottom : 5 ,
  } ,
  movieDesc : {
    paddingLeft : 15 ,
    cor : '# 131313' ,
    fontSize : 14 ,
    fontWeight : 'negrito'
  }
} ) ;
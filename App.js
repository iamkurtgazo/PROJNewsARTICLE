import{ View,Text, ScrollView, TouchableOpacity} from "react-native";
 import { useState,useEffect } from "react";
 export default function App() {
    const [article,setData]=useState([])
   console.log(log);
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-11-11&sortBy=publishedAt&apiKey=bcf0cdfa39264ba5a8b28f9b4479237e"


  const getArticles= () =>{

    fetch(url)
      .then(res=>res.json())
      .then((json)=>setData(json))
      .catch((err)=>console.log(err))
};
  
useEffect(() => {

    getArticles();
}, []) ;
  return(
    <> 
    {
      object.keys(Data).length > 0 &&(

        <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "space around",
            alignItems: "center"
          }}
        >
          {
            data.articles.map((article,index)=>(
              <Card key={index}>
                <View>
                  style={{
                    flexDirection:"row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 15
                  }
                  >
                    <><Text style={{ fontSize: 18, fontWeight: "bold", flex: 1 }}>{article.title}</Text><TouchableOpacity>
                      <Image
                        source={{ uri: urlToImage }}
                        style={{
                          width: 150,
                          height: 150,
                          borderRadius: 10
                        }} />
                    </TouchableOpacity></>
                  }</View>
                  <Text style={{fontSize:16}}>{article.description}</Text>
                    <Text>{article.descriptionAt}</Text>
                  </Card>
              ))  
          }
         </View>
        </ScrollView>
      )
    }
    </>
  );    
} 
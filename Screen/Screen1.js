import { View, Image, StyleSheet, Text, FlatList, Button } from "react-native";

const data = [
  {
    id: 0,
    name: 'Ca nấu lẩu, nấu mỳ mini...',
    shop: 'Devang',
    link: require('../assets/ca_nau_lau.png')
  }, 
  {
    id: 1,
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'LTD Food',
    link: require('../assets/ga_bo_toi.png')
  }, 
  {
    id: 2,
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    link: require('../assets/xa_can_cau.png')
  }, 
  {
    id: 3,
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    link: require('../assets/do_choi_dang_mo_hinh.png')
  }, 
  {
    id: 4,
    name: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
    link: require('../assets/lanh_dao_gian_don.png')
  }, 
  {
    id: 5,
    name: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
    link: require('../assets/hieu_long_con_tre.png')
  }, 
  {
    id: 6,
    name: 'DonalTrumn thiên tài lãnh đạo',
    shop: 'Minh Long Book',
    link: require('../assets/trump 1.png')
  }

]

const Item = ({it}) => (
  <View style={{height: '90px', flexDirection: 'row', borderTopWidth: "3px", margin:"2px", padding:"2px"}}>
      <View style={{flex: 2, }}>
        <Image style={{height: '80px', width: '80px'}} source={it.link}></Image>
      </View>
      <View style={{flex: 3,  }}>
        <Text>{it.name}</Text>
        <Text style={{color: "#fa0207"}}>Shop {it.shop}</Text>
      </View>
      <View style={{flex: 2, alignItems:"center", justifyContent:"center"}}>
        <Button color="#fa0207" title="Chat"></Button>
      </View>
  </View>
);


export default function Screen1() {

  return (
    <View style={styles.body}>
        <View style={{flex: 1, backgroundColor: "#19018c", flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
              <Image style={{height: '20px', width: '20px',}} source={require('../assets/ant-design_arrow-left-outlined.png')}></Image>
              <Text style={{color:'#FFF'}}>Chat</Text>
              <Image style={{height: '20px', width: '20px',}} source={require('../assets/bi_cart-check.png')}></Image>
        </View>

        <View style={{flex: 8}}>
            <FlatList
            data={data}
            renderItem={({item}) => <Item it={item} />}
            keyExtractor={item => item.id}
            />
        </View>

        <View style={{flex: 1, backgroundColor: "#19018c", flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
              <Image style={{height: '20px', width: '20px',}} source={require('../assets/Group 10.png')}></Image>
              <Image style={{height: '20px', width: '20px',}} source={require('../assets/home.png')}></Image>
              <Image style={{height: '20px', width: '20px',}} source={require('../assets/Vector 1 (Stroke).png')}></Image>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        
    }
});
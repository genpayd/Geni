import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";

export default function TopUp() {
  const [amount, setAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  // useEffect to handle the conversion when the amount changes
  useEffect(() => {
    const handleConvertion = (amount) => {
      const usd = 150;
      let convertedAmount = usd * amount;
      setFinalAmount(convertedAmount);
    };

    handleConvertion(parseInt(amount));
  }, [amount]);

  const [details, setDetails] = useState({
    account: {},
    amount: `${amount}`,
  });

  const getData = () => {
    //get data from local storage
    //take user id   
  };

  const handlePost = () => {
    // axios.post(`http://stk.cradlevoices.com:8082/Api/account/processCard`,details)
    // .then((res) => {
    // }).catch((err) => {
    //     console.log(err)
    // });
    alert('your top up is being processed');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Enter amount to withdraw</Text>
        <TextInput
          placeholder="Enter amount you want to withdraw"
          value={amount.toString()} // ensure value is a string for TextInput
          onChangeText={(text) => setAmount(Number(text))}
        />
        <View>
          <Text>The converted amount is KES. {finalAmount}</Text>
        </View>
      </View>
      <CustomButton title={`TopUp Kes. ${finalAmount || 0}`} onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

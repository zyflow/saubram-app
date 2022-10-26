import {Button, Image, Text, View} from "react-native";
import {coffeeStyles} from "../css/coffee";
import {styles} from "../css/styles";

export const ItemBlockWithImage = ({ title, image, rating, edit=true}) => (
    <View style={coffeeStyles.item}>
        <Image
            source={{
                uri: image,
                method: 'POST',
                headers: {
                    Pragma: 'no-cache'
                },
                body: 'Your Body goes here'
            }}
            style={coffeeStyles.image}
        />
        <View style={coffeeStyles.textBlock}>
            <View style={coffeeStyles.topLine}>
                <Text style={coffeeStyles.header}>{title}</Text>
                <View style={coffeeStyles.buttonContainer}>
                    {edit ?
                    <Button
                        style={styles.mainButton}
                        onPress={() => console.log('implement')}
                        title="Edit"
                        accessibilityLabel="Learn more about this purple button"

                    /> : <></>}
                </View>
            </View>
            <Text >Rating: {rating}</Text>

        </View>

    </View>
);

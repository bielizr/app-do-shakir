import { useState } from "react";
import { Modal, StyleSheet, View, TouchableWithoutFeedback, Text, TextInput, TouchableOpacity, Platform }
    from "react-native";
import commonStyles from "../commonStyles";

import moment from "moment";
import DateTimePickerAndroid from "@react-native-community/datetimepicker"


export default function AddTask(props) {

    const [desc, setDesc] = useState("")
    const [date, setDate] = useState(new Date())

    const getDatePicker = () => {
        let datePicker =
            <DateTimePicker valeu={date}
                onchange={(_, date) => {
                    setDate(date)
                    setShowDatePicker(false)
                }}
                mode='date'

            />

        const dateString = moment(date).format('ddd, D [de] YYYY')

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {setShowDatePicker && datePicker}
                </View>
            )
        }
        return datePicker 
    }

    return (
        <Modal transparent={true}
            visible={props.isVisible}
            onRequestClose={props.onCancel}
            animationType="slide">

            <TouchableWithoutFeedback
                onPress={props.onCancel}>

                <View style={styles.background}></View>
            </TouchableWithoutFeedback>

            <View style={styles.container}>
                <Text style={styles.header}>Nova Tarefa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe a Descrição"
                    onChangeText={setDesc}
                    valeu={desc} />

                {this.getDatePicker()}

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={props.onCancel}>
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.save}>
                        <Text style={styles.button}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback
                onPress={props.onCancel}>

                <View style={styles.background}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: "center",
        padding: 15,
        fontSize: 18
    },
    input: {
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today
    }
})
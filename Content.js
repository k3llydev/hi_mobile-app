import React, {Component} from 'react'
import {StyleSheet, Image, ScrollView, View, Text, Dimensions, TouchableHighlight, Alert } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    itemImage:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',//'space-between',
    },
    imageElement: {
        height: Math.round(screenHeight/2)-65,
        backgroundColor: "gray"
    },
    projectText: {
        color: "black",
        position: 'absolute',
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderBottomRightRadius: 10,
        fontFamily: "FuturaBookC-Regular",
        fontSize: Math.round( 18 + (screenWidth/100) )
    }
})

class Content extends Component{

    state = {
        allProjects: [],
        loading: true
    }

    gotoProject = (id) => {
        Alert.alert(`Go to project id:${id}`)
    }
    
    showProjectOverlay = (id) => {
        Alert.alert(`Project overlay for id:${id}`)
    }

    componentWillMount(){
        fetch("http://api.habitareinmobiliaria.com.mx/desarrollos.php")
            .then((result)=>result.json())
            .then((projects)=>{
                this.setState({
                    allProjects: projects
                })
            })
    }

    projectBox = (project) =>{
        let image = project.path + project.images.h
        return(
            <View key={project.id} >
                <TouchableHighlight onPress={(e)=>{this.gotoProject(""+project.id)}} onLongPress={ ()=>{this.showProjectOverlay(""+project.id)} } >
                    <Image nodeid={project.project.project} source={{uri: image}} resizeMode="stretch" style={styles.imageElement} onPress={this._onPressButton} />
                </TouchableHighlight>
                <Text style={styles.projectText}>{project.project.project}</Text>
            </View>
        );

    }

    render(){
        return(
                <ScrollView>
                    <View style={styles.itemImage}>
                        {
                            this.state.allProjects.map((project)=>{
                                return this.projectBox(project);
                            })
                        }
                    </View>
                </ScrollView>
        );
    }
}
export default Content
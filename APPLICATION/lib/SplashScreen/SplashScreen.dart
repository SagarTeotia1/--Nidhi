
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:my_app/AUTH_SCREEN/login_Screen.dart';

import 'package:my_app/COSNT/const.dart';
import 'package:my_app/COSNT/string.dart';
import 'package:my_app/widget/appiconwidget.dart';
import 'package:velocity_x/velocity_x.dart';

class splashScreen extends StatefulWidget{
  const splashScreen ({Key? key}) : super (key : key);
  @override 
  State<splashScreen> createState() => _splashScreen();

}
class _splashScreen extends State<splashScreen>{
  
  changeScreen(){
    Future.delayed(const Duration(seconds: 5),(){
      Get.to(() =>const loginScreen());
    });
  }

  @override
  void initState(){
    changeScreen();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(247, 231, 220, 1.000),
      body: Center(
        child: Column(
          children: [
            250.heightBox,
            appiconWidget(),
            20.heightBox,
            appName.text.fontFamily(regular).size(30).black.make(),
            10.heightBox,
            appVersion.text.fontFamily(regular).size(10).black.make(),
            150.heightBox,
            credits.text.fontFamily(regular).size(15).black.make(),

        ]),
      )
    );
  }
}
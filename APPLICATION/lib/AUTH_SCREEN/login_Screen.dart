import 'package:flutter/material.dart';
import 'package:my_app/AUTH_SCREEN/custom_TextBox.dart';
import 'package:my_app/COSNT/const.dart';
import 'package:my_app/widget/Button.dart';
import 'package:my_app/widget/appiconwidget.dart';
import 'package:velocity_x/velocity_x.dart';
class loginScreen extends StatelessWidget{
  const loginScreen ({Key? key}) : super (key : key);
 
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor:  Color.fromRGBO(247, 231, 220, 1.000),
      resizeToAvoidBottomInset: false,
      body: Center(
        child: Column(
          children: [
            100.heightBox,
            appiconWidget(),
            5.heightBox,
            appName.text.fontFamily(regular).size(30).black.make(),
            10.heightBox,
            Column(
              children: [
                
                CustomTextField(title: username,hint: namehint),
                CustomTextField(title: Password,hint: PasswordHint),
                5.heightBox,
                ourButton(title: Login,textColor:Colors.black).box.padding(const EdgeInsets.all(20)).make(),
                
              ],
            ).box.color(Color.fromRGBO(64,93,114,1.000)).rounded.padding(const EdgeInsets.all(20)).make(),       
        ]),
      )
    );
  }
}
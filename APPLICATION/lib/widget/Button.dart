import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

Widget ourButton({required String title, Color? textColor}) {
  return ElevatedButton(
    style: ElevatedButton.styleFrom(
      backgroundColor: Colors.amber[100],
      padding: const EdgeInsets.all(12),
    ),
    onPressed: () async {
      const url = 'https://www.youtube.com';
      if (await canLaunch(url)) {
        await launch(url);
      } else {
        // Handle the error appropriately
        print('Could not launch $url');
      }
    },
    child: Text(
      title,
      style: TextStyle(
        color: textColor ?? Colors.black, // Default color if textColor is not provided
        fontFamily: 'Regular', // Ensure 'Regular' is a valid font family
      ),
    ),
  );
}

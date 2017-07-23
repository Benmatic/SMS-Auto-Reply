function AutoReplyr() {
  var i = [],
      response_msg = "",
      label_s = "",
      label_r = "",
      msg_threads = [];
  
  // Set your SMS reply here:
  response_msg = "I'm currently out of the office and will return on Monday. Maybe."
  
  
  // SETUP INSTRUCTIONS:
  // 1. Create a new label (example: SMS) and create a new filter to assign to new messages. 
  // 2. Optional: Create a 2nd sub-label to assign after a response is sent. (example: SMS/AutoResponse)
  // 3. Set a time based trigger to run this function. Example: every 15 mins
  
  // Set your label name here.
  label_s = "SMS"
  
  // Optional: After replying add this label to the thread. 
  label_r = "SMS/AutoResponse"
  
  // Search for new unread messages with the label and newer than 1 hour. Set your trigger timer sooner than 1 hour.
  msg_threads = GmailApp.search("label:" + label_s + " label:unread newer_than:1h");
  for (i = 0; i < msg_threads.length; i++) {
  
    // Future logic to stop autoresponse to every message. Use a content search, not thread count or date hack.
    // Hack logic to stop auto response based on time. This gets the date time of first message in thread. 
    // var message = msg_threads[i].getMessages()[0];
    // Logger.log(message.getDate());
 
    // Hack logic to stop auto response to new messages in a multi message chain
    // Logger.log(msg_threads[i].getMessageCount()); //Get the number of messages in a thread
    
    
    // Reply to message
    msg_threads[i].reply(response_msg);
    
    // Tag as read
    GmailApp.markThreadRead(msg_threads[i]);
    
    //Optional: Tag the thread with additional label
    //GmailApp.getUserLabelByName(label_r).addToThread(msg_threads[i]);
  }
}

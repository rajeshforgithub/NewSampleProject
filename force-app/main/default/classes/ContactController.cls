public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, Name FROM Contact LIMIT 10];
    }
}

/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"UnwugL4xtltgeXJQpQnMJLrAH2VxVp9a"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"2ZgqudsFZ1ujUlqbqQLXxQkp5DhuabFD"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"52HgzTS9KaApQvDmRJzGzM7Xu9mwmSbb"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"kL6SevwhpEYXlqpUQGwAkD5evV8sNMH7"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"C6RUbO0Dln5FtdwgwUqwLsLbb9jHKvLa"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"BLSSZnjxAzqAsRQPpgBTfsEET9JqOD0J"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end

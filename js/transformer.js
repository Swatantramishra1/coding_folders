
/***
* Docs: https://docs.rudderstack.com/getting-started/adding-a-new-user-transformation-in-rudderstack
* Examples: https://github.com/rudderlabs/sample-user-transformers
***/

// var forFilterObject = {
//     "_10": "",
//     "_58": "",
//     "_87": "",
//     "_113": "",
//     "_66": "",
//     "_44": "",
//     "_8": "",
//     "_100": "",
//     "_130": "",
//     "_62": "",
//     "_104": "",
//     "_47": "",
//     "_17": "",
//     "_68": "",
//     "_147": "",
//     "_25": "",
//     "_144": "",
//     "_98": "",
//     "_137": "",
//     "_34": "",
//     "_9": "",
//     "_59": "",
//     "_86": "",
//     "_67": "",
//     "_141": "",
//     "_1": "",
//     "_23": "",
//     "_61": "",
//     "_106": "",
//     "_93": "",
//     "_124": "",
//     "_116": "",
//     "_36": "",
//     "_103": "",
//     "_37": "",
//     "_64": "",
//     "_22": "",
//     "_19": "",
//     "_45": "",
//     "_46": "",
//     "_91": "",
//     "_52": "",
//     "_119": "",
//     "_24": "",
//     "_42": "",
//     "_13": "",
//     "_94": "",
//     "_117": "",
//     "_142": "",
//     "_65": "",
//     "_39": "",
//     "_120": "",
//     "_55": "",
//     "_131": "",
//     "_50": "",
//     "_72": "",
//     "_138": "",
//     "_111": "",
//     "_40": "",
//     "_107": "",
//     "_69": "",
//     "_99": "",
//     "_20": "",
//     "_108": "",
//     "_2": "",
//     "_88": "",
//     "_14": "",
//     "_129": "",
//     "_74": "",
//     "_75": "",
//     "_15": "",
//     "_12": "",
//     "_133": "",
//     "_122": "",
//     "_81": "",
//     "_43": "",
//     "_31": "",
//     "_27": "",
//     "_128": "",
//     "_18": "",
//     "_73": "",
//     "_71": "",
//     "_60": "",
//     "_121": "",
//     "_76": "",
//     "_102": "",
//     "_123": "",
//     "_90": "",
//     "_54": "",
//     "_11": "",
//     "_35": "",
//     "_109": "",
//     "_80": "",
//     "_56": "",
//     "_97": "",
//     "_41": "",
//     "_114": "",
//     "_57": "",
//     "_21": "",
//     "_82": "",
//     "_48": "",
//     "_63": "",
//     "_96": "",
//     "_26": "",
//     "_6": "",
//     "_101": "",
//     "_135": "",
//     "_134": "",
//     "_79": "",
//     "_145": "",
//     "_105": "",
//     "_143": "",
//     "_140": "",
//     "_89": "",
//     "_95": "",
//     "_148": "",
//     "_0": "",
//     "_132": "",
//     "_16": "",
//     "_139": "",
//     "_85": "",
//     "_33": "",
//     "_136": "",
//     "_29": "",
//     "_126": "",
//     "_30": "",
//     "_146": "",
//     "_3": "",
//     "_7": "",
//     "_112": "",
//     "_125": "",
//     "_53": "",
//     "_4": "",
//     "_38": "",
//     "_115": "",
//     "_127": "",
//     "_5": "",
//     "_110": "",
//     "_70": "",
//     "_28": "",
//     "_92": "",
//     "_51": "",
//     "_78": "",
//     "_49": "",
//     "_84": "",
//     "_32": "",
//     "_83": "",
//     "_118": "",
//     "_77": "",
//     "_149": "",
//     "_150": "",
//     "_153": "",
//     "_152": "",
//     "_151": "",
//     "context_22_": "",
//     "context_26_": "",
//     "context_75_": "",
//     "context_53_": "",
//     "context_51_": "",
//     "context_35_": "",
//     "context_48_": "",
//     "context_46_": "",
//     "context_54_": "",
//     "context_59_": "",
//     "context_76_": "",
//     "context_43_": "",
//     "context_33_": "",
//     "context_77_": "",
//     "context_68_": "",
//     "context_39_": "",
//     "context_31_": "",
//     "context_41_": "",
//     "context_40_": "",
//     "context_58_": "",
//     "context_73_": "",
//     "context_78_": "",
//     "context_63_": "",
//     "context_65_": "",
//     "context_29_": "",
//     "context_45_": "",
//     "context_49_": "",
//     "context_50_": "",
//     "context_66_": "",
//     "context_24_": "",
//     "context_55_": "",
//     "context_64_": "",
//     "context_47_": "",
//     "context_23_": "",
//     "context_27_": "",
//     "context_67_": "",
//     "context_70_": "",
//     "context_25_": "",
//     "context_62_": "",
//     "context_44_": "",
//     "context_38_": "",
//     "context_28_": "",
//     "context_30_": "",
//     "context_61_": "",
//     "context_21_": "",
//     "context_42_": "",
//     "context_60_": "",
//     "context_37_": "",
//     "context_34_": "",
//     "context_57_": "",
//     "context_71_": "",
//     "context_74_": "",
//     "context_69_": "",
//     "context_36_": "",
//     "context_72_": "",
//     "context_52_": "",
//     "context_32_": "",
//     "context_56_": "",
//     "_156": "",
//     "_154": "",
//     "_155": "",
//     "context_2_v": ""
//     }

//     var input = [
//         {
//           "anonymousId": "8d872292709c6fbe",
//           "channel": "mobile",
//           "context": {
//             "app": {
//               "build": "1",
//               "name": "AMTestProject",
//               "namespace": "com.rudderstack.android.rudderstack.sampleAndroidApp",
//               "version": "1.0"
//             },
//             "device": {
//               "id": "8d872292709c6fbe",
//               "manufacturer": "Google",
//               "model": "AOSPonIAEmulator",
//               "name": "generic_x86_arm",
//               "type": "android"
//             },
//             "library": {
//               "name": "com.rudderstack.android.sdk.core",
//               "version": "1.0.2"
//             },
//             "locale": "en-US",
//             "network": {
//               "carrier": "Android",
//               "bluetooth": false,
//               "cellular": true,
//               "wifi": true
//             },
//             "os": {
//               "name": "Android",
//               "version": "9"
//             },
//             "screen": {
//               "density": 420,
//               "height": 1794,
//               "width": 1080
//             },
//             "timezone": "Asia/Kolkata",
//             "traits": {
//               "address": {
//                 "city": "Kolkata",
//                 "country": "India",
//                 "postalcode": "700096",
//                 "state": "West bengal",
//                 "street": "Park Street"
//               },
//               "age": "30",
//               "anonymousId": "8d872292709c6fbe",
//               "birthday": "2020-05-26",
//               "createdat": "18th March 2020",
//               "description": "Premium User for 3 years",
//               "email": "identify@test.com",
//               "firstname": "John",
//               "userId": "sample_user_id",
//               "lastname": "Sparrow",
//               "name": "John Sparrow",
//               "id": "sample_user_id",
//               "phone": "9112340345",
//               "username": "john_sparrow"
//             },
//             "userAgent": "Dalvik/2.1.0 (Linux; U; Android 9; AOSP on IA Emulator Build/PSR1.180720.117)"
//           },
//           "event": "Product Clicked",
//           "integrations": {
//             "All": true
//           },
//           "messageId": "1590431830915-73bed370-5889-436d-9a9e-0c0e0c809d06",
//           "properties": {
//             "0": "{",
//             "1": "\"",
//             "2": "o",
//             "3": "b",
//             "4": "j",
//             "5": "e",
//             "6": "c",
//             "7": "t",
//             "8": "N",
//             "9": "a",
//             "10": "m",
//             "11": "e",
//             "revenue": "30",
//             "currency": "USD",
//             "quantity": "5",
//             "_66": "",
//             "test_key_2": {
//               "test_child_key_1": "test_child_value_1"
//             },
//             "price": "58.0"
//           },
//           "originalTimestamp": "2020-05-25T18:37:10.917Z",
//           "type": "track",
//           "userId": "sample_user_id"
//         }
//       ]  
    
//     function deletePropertyPath (obj, path) {
    
//       if (!obj || !path) {
//         return;
//       }
    
//       if (typeof path === 'string') {
//         path = path.split('.');
//       }
    
//       for (var i = 0; i < path.length - 1; i++) {
    
//         obj = obj[path[i]];
    
//         if (typeof obj === 'undefined') {
//           return;
//         }
//       }
    
//       delete obj[path.pop()];
//     }
    
//     function removeNumberValues(object) {
//       Object.keys(object).forEach(function (key) {
//          key = Number(key);
//           if (typeof key === 'number') {
//               delete object[key];
//           }
//       });
//       return object;
//   }

//     function transform(events) {
//       events = events.map(event => {
//                 var tempEvent = event;
//                 // for(let key in forFilterObject) {
//                     if(tempEvent.hasOwnProperty("properties")) {
//                          const props =  tempEvent["properties"];
//                          console.log("here")
//                         tempEvent["properties"] = removeNumberValues(props);
//                     //   const props =  tempEvent["properties"];
//                         // if(props.hasOwnProperty(key)) {
//                         //     deletePropertyPath(tempEvent,`properties.${key}`);
//                         // }  
//                     }
                   
//                 // }
                
//                 return tempEvent;
//             })
//           return events;
//     }
    
    

//     console.log(transform(input))


const events =[
  {
  "anonymousId": "5d242c6e-bec1-4040-ab07-124c115815ca",
  "channel": "web",
  "context": {
      "app": {
          "name": "Supr Daily 2.0",
          "namespace": "com.supr.suprdaily",
          "version": "3.1.15"
      },
      "device": {
          "advertisingId": "92d18ac7-df1f-4ab9-99d9-858e22590a88",
          "id": "f8ef52ab-6fe4-ca77-3529-801081593748",
          "manufacturer": "samsung",
          "model": "SM-J415F",
          "type": {}
      },
      "library": {
          "name": "RudderLabs JavaScript SDK",
          "version": "1.0.11"
      },
      "locale": "en-GB",
      "os": {
          "name": "Android",
          "version": "9"
      },
      "page": {
          "path": "/search",
          "referrer": "",
          "search": "",
          "title": "Supr Daily V3",
          "url": "http://localhost:8080/search"
      },
      "screen": {
          "density": 1.75
      },
      "timezone": "Asia/Kolkata",
      "traits": {
          "city": "",
          "cityId": "",
          "email": "Kundooran@gmail.com",
          "firstName": "Narayanan",
          "id": "2943392",
          "lastName": "Koonamakal",
          "phone": "8169042601",
          "platforms": [
              {
                  "active": "true",
                  "platform": "ANDROID"
              }
          ]
      },
      "userAgent": "Mozilla/5.0 (Linux; Android 9; SM-J415F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36"
  },
  "event": "impression",
  "integrations": {
      "MoEngage": false
  },
  "messageId": "8eab4bef-5e42-4ffe-bcf3-f7ed34a24bb5",
  "originalTimestamp": "2020-12-22T08:02:16.020Z",
  "properties": {
      "activeExperimentNames": "searchBoxPlaceholder,showSuprAccessAutoDebit,campaignPopupNudge,autoAddSuprAccessToCart,sampledEvent,showSuprPassCard,skuAutoAdd,showMoreSimilarProductsBtn,supportConfig,showSuprPassSavingsBannerOnCart,showSuprPassSidebarCard,selfServeConfig",
      "context": "-",
      "currentScreen": "search",
      "ionicBuild": false,
      "ionicPatchVersion": 9,
      "isAnonymousUser": false,
      "isSampledEvent": false,
      "modalName": "-",
      "networkType": "wifi",
      "objectName": "category",
      "objectTag": "_",
      "objectValue": 14,
      "referralScreen": "order-calendar",
      "sessionId": "1608624105677--f8ef52ab-6fe4-ca77-3529-801081593748",
      "suprAccessMember": true,
      "suprAccessValidity": 67,
      "suprCreditsBalance": 0,
      "suprWalletBalance": 514,
      "CONTEXT_1_NAME": "collection-v3",
      "CONTEXT_1_VALUE":"2002"
  },
  "receivedAt": "2020-12-22T08:02:16.879Z",
  "rudderId": "fe0895ca-842b-482a-91a4-a44e582ad904",
  "sentAt": "2020-12-22T08:02:16.023Z",
  "type": "track",
  "userId": "2943392"
}
]  


//     let filterVersion = '3.1.11';

// function transform(events) {
//     return events.filter((event,index) => {
//         const appVersion = event.context.app.version;
//         if(appVersion >= filterVersion) {
//             return event;
//         }
//     })
// }


// console.log(transform(events));




/***
* Docs: https://docs.rudderstack.com/getting-started/adding-a-new-user-transformation-in-rudderstack
* Examples: https://github.com/rudderlabs/sample-user-transformers
***/

// After testing remove this as no need now
var forFilterObject = {
"_10": "",
"_58": "",
"_87": "",
"_113": "",
"_66": "",
"_44": "",
"_8": "",
"_100": "",
"_130": "",
"_62": "",
"_104": "",
"_47": "",
"_17": "",
"_68": "",
"_147": "",
"_25": "",
"_144": "",
"_98": "",
"_137": "",
"_34": "",
"_9": "",
"_59": "",
"_86": "",
"_67": "",
"_141": "",
"_1": "",
"_23": "",
"_61": "",
"_106": "",
"_93": "",
"_124": "",
"_116": "",
"_36": "",
"_103": "",
"_37": "",
"_64": "",
"_22": "",
"_19": "",
"_45": "",
"_46": "",
"_91": "",
"_52": "",
"_119": "",
"_24": "",
"_42": "",
"_13": "",
"_94": "",
"_117": "",
"_142": "",
"_65": "",
"_39": "",
"_120": "",
"_55": "",
"_131": "",
"_50": "",
"_72": "",
"_138": "",
"_111": "",
"_40": "",
"_107": "",
"_69": "",
"_99": "",
"_20": "",
"_108": "",
"_2": "",
"_88": "",
"_14": "",
"_129": "",
"_74": "",
"_75": "",
"_15": "",
"_12": "",
"_133": "",
"_122": "",
"_81": "",
"_43": "",
"_31": "",
"_27": "",
"_128": "",
"_18": "",
"_73": "",
"_71": "",
"_60": "",
"_121": "",
"_76": "",
"_102": "",
"_123": "",
"_90": "",
"_54": "",
"_11": "",
"_35": "",
"_109": "",
"_80": "",
"_56": "",
"_97": "",
"_41": "",
"_114": "",
"_57": "",
"_21": "",
"_82": "",
"_48": "",
"_63": "",
"_96": "",
"_26": "",
"_6": "",
"_101": "",
"_135": "",
"_134": "",
"_79": "",
"_145": "",
"_105": "",
"_143": "",
"_140": "",
"_89": "",
"_95": "",
"_148": "",
"_0": "",
"_132": "",
"_16": "",
"_139": "",
"_85": "",
"_33": "",
"_136": "",
"_29": "",
"_126": "",
"_30": "",
"_146": "",
"_3": "",
"_7": "",
"_112": "",
"_125": "",
"_53": "",
"_4": "",
"_38": "",
"_115": "",
"_127": "",
"_5": "",
"_110": "",
"_70": "",
"_28": "",
"_92": "",
"_51": "",
"_78": "",
"_49": "",
"_84": "",
"_32": "",
"_83": "",
"_118": "",
"_77": "",
"_149": "",
"_150": "",
"_153": "",
"_152": "",
"_151": "",
"context_22_": "",
"context_26_": "",
"context_75_": "",
"context_53_": "",
"context_51_": "",
"context_35_": "",
"context_48_": "",
"context_46_": "",
"context_54_": "",
"context_59_": "",
"context_76_": "",
"context_43_": "",
"context_33_": "",
"context_77_": "",
"context_68_": "",
"context_39_": "",
"context_31_": "",
"context_41_": "",
"context_40_": "",
"context_58_": "",
"context_73_": "",
"context_78_": "",
"context_63_": "",
"context_65_": "",
"context_29_": "",
"context_45_": "",
"context_49_": "",
"context_50_": "",
"context_66_": "",
"context_24_": "",
"context_55_": "",
"context_64_": "",
"context_47_": "",
"context_23_": "",
"context_27_": "",
"context_67_": "",
"context_70_": "",
"context_25_": "",
"context_62_": "",
"context_44_": "",
"context_38_": "",
"context_28_": "",
"context_30_": "",
"context_61_": "",
"context_21_": "",
"context_42_": "",
"context_60_": "",
"context_37_": "",
"context_34_": "",
"context_57_": "",
"context_71_": "",
"context_74_": "",
"context_69_": "",
"context_36_": "",
"context_72_": "",
"context_52_": "",
"context_32_": "",
"context_56_": "",
"_156": "",
"_154": "",
"_155": "",
"context_2_v": ""
}

// same for this too
function deletePropertyPath (obj, path) {

  if (!obj || !path) {
    return;
  }

  if (typeof path === 'string') {
    path = path.split('.');
  }

  for (var i = 0; i < path.length - 1; i++) {

    obj = obj[path[i]];

    if (typeof obj === 'undefined') {
      return;
    }
  }

  delete obj[path.pop()];
}

function removeNumberValues(object) {
      Object.keys(object).forEach(function (key) {
         key = Number(key);
          if (typeof key === 'number') {
              delete object[key];
          }
      });
      return object;
  }

function transform(events) {
  events = events.map(event => {
            var tempEvent = event;
                if(tempEvent.hasOwnProperty("properties")) {
                     const props =  tempEvent["properties"];
                    tempEvent["properties"] = removeNumberValues(props);
                }
            
            return tempEvent;
        })
      return events;
}


console.log(transform(events))
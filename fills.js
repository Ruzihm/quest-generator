var fills = {
    "actor_description":[{
        "name":"industrious",
        "requires":{"actor":[
            "sapient"
                ]
        }
    },{
        "name":"nostalgic",
        "requires":{"actor":[
            "sentient"
                ]
        }
    },{
        "name":"squeamish",
        "requires":{"actor":[
            "sapient"
                ]
        }
    },{
        "name":"anonymous",
        "requires":{"actor":[
            "sapient"
                ]
        }
    }],
    "actor":[{
        "name":"political leader",
        "tags":["lawful","sapient","sentient"],
    },{
        "name":"philanthropist",
        "tags":["sapient","sentient"],
    },{
        "name":"rebellion",
        "tags":["sapient","sentient","multiple","unlawful"],
    }],
    "actor_goal":[{
        "name":"to build a legacy",
        "requires":{
            "actor":[
                "sapient"
            ]
        }
    }, {
        "name":"to protect their life's work",
        "requires":{
            "actor":[
                "sentient"
            ]
        }
    },{
        "name":"to improve society",
        "requires":{
            "actor":[
                "sentient"
            ]
        }
    },{
        "name":"to spread culture",
        "requires":{
            "actor":[
                "sapient",
            ]
        }
    }],
    "actor_drive":[{
        "name":"enticed",
        "requires":{
            "actor_driver":[
                "sapient"
            ],
            "actor":[
                "sapient"
                ]
        }
    },{
        "name":"driven",
        "tags":["internal"],
        "requires":{
            "actor_driver":[
                "internal"
                ]
        }
    }],
    "actor_driver":[{
        "name":"greed",
        "tags":["internal"],
        "requires":{
            "actor":[
                "sentient"
                ]
        }
    },{
        "name":"a religious figure",
        "tags":["tangible","sentient","sapient"],
    },{
        "name":"intellectualism",
        "tags":["internal"],
        "requires":{
            "actor":[
                "sapient"
                ]
        }
    },{
        "name":"freedom",
    }],
    "action":[{
        "name":"to exploit",
    },{
        "name":"to kill/destroy",
        "requires":{
            "target":[
                "tangible"
                ]
        }
    },{
        "name":"to protect",
    }],
    "target":[{
        "name":"natural resources",
        "tags":["multiple"],
    },{
        "name":"an ancient being",
        "tags":["tangible","living"],
    },{
        "name":"the meek",
        "tags":["multiple","living"],
        "requires":{
            "actor":[
                "sentient"
                ]
        }
    },{
        "name":"cultural artifacts",
        "tags":["multiple"],
    }],
    "sacrifice":[{
        "name":"disrupts the balance of things",
    },{
        "name":"unleashes destruction",
    },{
        "name":"involves many innocent people",
        "tags":["internal"],
    },{
        "name":"breaks very serious laws",
        "tags":["chaotic"],
        "requires":{
            "actor": [
                "sapient"
            ]
        }
    },{
        "name":"leads to tyrrany",
    }],
    "sacrifice_excuse":[{
        "name":"they are oblivious to the effects",
        "requires":{
            "actor":[
                "sentient"
                ]
        }
    },{
        "name":"they are unaware it could even be a consequence",
        "requires":{
            "actor":[
                "sapient"
                ]
        }
    },{
        "name":"the ends justify the means",
        "requires":{
            "actor":[
                "sapient"
                ]
        }
    }],
    "adventurer_description":[{
        "name":"close-to-nature",
        "tags":["class"],
    },{
        "name":"nearby",
        "tags":["geography"],
    },{
        "name":"rich",
        "tags":["class"],
    },{
        "name":"sufficiently authorized",
        "tags":[],
    },{
        "name":"insider-now-outsider",
    }],
    "adventurer_drive":[{
        "name":"to seek answers",
    },{
        "name":"to escape with their lives",
    },{
        "name":"to do their job even if it's difficult",
    },{
        "name":"to defy an established power",
        "excludes":{
            "adventurer_driver":[
                "environmental"
                ]
        }
    }], 
    "adventurer_driver":[{
        "name":"wide-reaching effects on nature",
        "tags":["environmental"],
    },{
        "name":"an imminent disaster",
        "tags":["environmental"],
    },{
        "name":"suspicious activity noticed during daily activity",
    },{
        "name":"something/someone they trusted is found to be against them",
    },{
        "name":"their friends/family being at stake"
    }],
    "adventurer_action":[{
        "name":"seeking the source of the problem",
    },{
        "name":"retrieving a stolen artifact",
    },{
        "name":"investigating further than most would go",
    },{
        "name":"breaking into/out of a secure location"
    }]
}

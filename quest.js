/* Durstenfeld shuffle shamelessly stolen from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function gen() {
    var excludes = {};
    var requires = {};
    $.each(fills, function(curBlank,_) {
        excludes[curBlank] = [];
        requires[curBlank] = [];
    });

    var selected = {}
    var success = true;

    var shuffledFills = shuffleArray(fills);

    $.each(shuffledFills, function(curBlank, curBlankOptions) {
        var curBlankExcludes = excludes[curBlank]
        var curBlankRequires = requires[curBlank]

        var selectedFill = null;
    
        var shuffledBlankOptions = shuffleArray(curBlankOptions);

        $.each(shuffledBlankOptions, function(_, curFill) {
            var curFillName = curFill.name;
            var curFillTags = curFill.tags;
            var curFillExcludes = curFill.excludes;
            var curFillRequires = curFill.requires;
            
            var invalidFill = false;

            // Check if all relevant requires are met
            $.each(curBlankRequires, function(_, curBlankRequire) {
                if (-1 === $.inArray(curBlankRequire, curFillTags)) {
                    //alert("Voided due to missing tag: " + curBlankRequire);
                    invalidFill = true;
                    return false;
                }
            });

            if (invalidFill) {
                return true;
            }

            // Check if all relevant excludes are met
            $.each(curBlankExcludes, function(_,curBlankExclude) {
                if (-1 !== $.inArray(curBlankExclude, curFillTags)) {
                    //alert("Voided due to present tag: " + curBlankExclude);
                    invalidFill = true;
                    return false;
                }
            });

            if (invalidFill) {
                return true;
            }

            // Check if all of this fill's requires have been met
            $.each(curFillRequires, function(curHypotheticalBlank, curHypotheticalFillRequires) {
                if ( curHypotheticalBlank in selected ) {
                    var selectedFill = selected[curHypotheticalBlank];
                    $.each(curHypotheticalFillRequires, function (_,curHypotheticalFillRequire) {
                        if (-1 === $.inArray(curHypotheticalFillRequire, selectedFill.tags)) {
                            //alert("Voided due to unfulfilled require: " + curHypotheticalFillRequire);
                            invalidFill = true;
                            return false;
                        }
                    });
                    if (invalidFill) {
                        return false;
                    }
                }
            });

            if (invalidFill) {
                return true;
            }

            // Check if all of this fill's excludes have been met
            $.each(curFillExcludes, function(curHypotheticalBlank, curHypotheticalFillExcludes) {
                if ( curHypotheticalBlank in selected ) {
                    var selectedFill = selected[curHypotheticalBlank];
                    $.each(curHypotheticalFillExcludes, function (_,curHypotheticalFillExclude) {
                        if (-1 !== $.inArray(curHypotheticalFillExclude, selectedFill.tags)) {
                            //alert("Voided due to unfulfilled require: " + curHypotheticalFillExclude);
                            invalidFill = true;
                            return false;
                        }
                    });
                    if (invalidFill) {
                        return false;
                    }
                }
            });

            if (invalidFill) {
                return true;
            }

            // Check for conflicting requires in this fill vs other excludes
            $.each(curFillRequires, function(curHypotheticalBlank, curHypotheticalFillRequires) {
                var curHypotheticalBlankExcludes = excludes[curHypotheticalBlank];

                $.each(curHypotheticalFillRequires, function(_,curHypotheticalFillRequire) {
                    if (-1 !== $.inArray(curHypotheticalFillRequire,curHypotheticalBlankExcludes)) {
                        //alert("Voided due to conflicting require: " + curHypotheticalFillRequire);
                        invalidFill = true;
                        return false;
                    }
                });

                if (invalidFill){
                    return false;
                }
            });

            if (invalidFill) {
                return true;
            }
            
            // Check for conflicting excludes in this fill vs other requires
            $.each(curFillExcludes, function(curHypotheticalBlank, curHypotheticalFillExcludes) {
                var curHypotheticalBlankRequires = requires[curHypotheticalBlank];

                $.each(curHypotheticalFillExcludes, function(_,curHypotheticalFillExclude) {
                    if (-1 !== $.inArray(curHypotheticalFillExclude,curHypotheticalBlankRequires)) {
                        //alert("Voided due to conflicting require: " + curHypotheticalFillExclude);
                        invalidFill = true;
                        return false;
                    }
                });

                if (invalidFill){
                    return false;
                }
            });

            if (invalidFill) {
                return true;
            }

            selectedFill = curFill;
            return false;
        });

        if (selectedFill === null) {
            alert("No suitable fill found!");
            success = false;
            return false;
        }

        selected[curBlank] = selectedFill;

        $.each(selectedFill.excludes, function (curExcludeBlank, curExcludeTags) {
            if (! (curExcludeBlank in excludes) ) {
                excludes[curExcludeBlank] = [];
            }
            $.each(curExcludeTags, function (_,curExcludeTag) {
                if (-1 === $.inArray(curExcludeTag,excludes[curExcludeBlank])) {
                    excludes[curExcludeBlank].push(curExcludeTag);
                }
            });
        });

        $.each(selectedFill.requires, function (curRequireBlank, curRequireTags) {
            if (! (curRequireBlank in requires) ) {
                requires[curRequireBlank] = [];
            }
            $.each(curRequireTags, function (_,curRequireTag) {
                if (-1 === $.inArray(curRequireTag,requires[curRequireBlank])) {
                    requires[curRequireBlank].push(curRequireTag);
                }
            });
        });
    
    });

    if (success) {
        //alert(JSON.stringify(selected));
        return selected;
    } else {
        return null;
    }
}

function make() {
    var res = gen();

    //alert(JSON.stringify(res));
    $.each(res, function(blank,fill) {
        $("#"+blank).text(fill.name);
    });

}
    





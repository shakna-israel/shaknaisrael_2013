window.log=function(){if(log.history=log.history||[],log.history.push(arguments),this.console){arguments.callee=arguments.callee.caller;var o=[].slice.call(arguments);"object"==typeof console.log?log.apply.call(console.log,console,o):console.log.apply(console,o)}},function(o){function e(){}for(var l,r="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(",");l=r.pop();)o[l]=o[l]||e}(function(){try{return console.log(),window.console}catch(o){return window.console={}}}());
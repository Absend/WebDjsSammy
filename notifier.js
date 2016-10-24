let notifier = (function () {

    function success(msg){
        toastr.success(msg);
    }

    function error(msg){
        toastr.error(msg);
    }
    
    return {
        success,
        error
    };
})();

export{ notifier };
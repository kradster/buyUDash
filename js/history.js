$(document).ready(function(){
    var pending_deposite_table = $("#pending_deposite_table");
    var success_deposite_table = $("#success_deposite_table");
    var pending_withdraws_table = $("#pending_withdraws_table");
    var success_withdraws_table = $("#success_withdraws_table");
    var orders_table = $("#orders_table");

    pending_deposite_table.dataTable();
    success_deposite_table.dataTable();
    pending_withdraws_table.dataTable();
    success_withdraws_table.dataTable();
    orders_table.dataTable();
});

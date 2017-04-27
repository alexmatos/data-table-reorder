$(document).ready(function() {
    var table = $('#cronogramaTable').DataTable( {
        rowReorder: true,
        "paging": false,
        "ordering": false,
        "info": false,
        "bFilter": false,
        "scrollXY": false,
        "scrollCollapse": true,
        "processing": true,
        "responsive": true,
        "language": {
            "loadingRecords": "Carregando...",
            "processing": '<div class = "alert alert-warning"><i class="fa fa-cog fa-spin fa-2x"> </i> Carregando as Pessoas/Instituições Relacionadas ao documento</div>',
            "sEmptyTable": '<h3>Nenhum registro encontrado</h3>'
        },
        "bAutoWidth": false,
        "aoColumnDefs": [     
            {"mData": "id", "visible": false}, 
            
            {"mData": "etapa",  
                "mRender": function (data, type, full) {               
                    return  (data < 10) ? '00' + data :  (data < 100 ? '0' + data : data);
                }
            }, 
            {"mData": "especificacao"}, 
            {"mData": "quantidade"}, 
            {"mData": "unidade"}, 
            {"mData": "data_inicio"}, 
            {"mData": "data_termino"}, 
            {"mData": "actions"}
        ]  
    } );
} );


/*

    let cronogramaTable = $('#cronogramaTable').DataTable({
        "paging": false,
        "ordering": false,
        "info": false,
        "bFilter": false,
        "scrollXY": false,
        "scrollCollapse": true,
        "processing": true,
        "responsive": true,
        "language": {
            "loadingRecords": "Carregando...",
            "processing": '<div class = "alert alert-warning"><i class="fa fa-cog fa-spin fa-2x"> </i> Carregando as Pessoas/Instituições Relacionadas ao documento</div>',
            "sEmptyTable": '<h3>Nenhum registro encontrado</h3>'
        },
        "bAutoWidth": false,
        "rowReorder": {
            update: true
        },
        "aoColumnDefs": [     
            {"mData": "id", "aTargets": [0], "visible": true}, 
            
            {"mData": "etapa", "orderable": true, "bsort": true, "aTargets": [1], 
                "mRender": function (data, type, full) {               
                    return  (data < 10) ? '00' + data :  (data < 100 ? '0' + data : data);
                }
            }, 
            {"mData": "especificacao", "aTargets": [2]}, 
            {"mData": "quantidade", "aTargets": [3]}, 
            {"mData": "unidade", "aTargets": [4]}, 
            {"mData": "data_inicio", "aTargets": [5]}, 
            {"mData": "data_termino", "aTargets": [6]}, 
            {"mData": "actions", "aTargets": [7]}
        ]  
    });

*/
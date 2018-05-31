/**
*	Autor=> Victor M Gomez Muñoz
*
*
*/
{
	$(function(){


		let $div= $("#miId");
		let $h3primero = $(".domtree h3");
		let $h3izquierda = $('.example').children('h3:first');
		let $h1 = $('.section').children('h1');
		let $textArea = $('#customInput');
		let $btajax = $('input[value="AJAX"]');
		let $btArriba = $('input[value="sube/baja"]');
		let $btdesaparecer = $('input[value="desaparece/aparece"]');
		let $btefectos = $('input[value="efectos"]');
		let $bteancho = $('input[value="ancho/alto"]');
		let $btverde = $('input[value="verde"]');
		let $bthighlight = $('input[value="anima"]');
		let nombre = "Víctor Gómez Muñoz";


		let h3Efecto = function() {
			//no se como se haria para no tener que repetir el selector que he declarado arriba del todo.
			$h3izquierda.fadeOut(null, function(){
				$(this).fadeIn();
			});
		}
		let ajaxF = function(){
			$.ajax('index.html')
	    	.done( function(data){
	      		$textArea.val(data)
			})
			.fail(console.error('error'))
			.always(console.info('Finalizado'));
		}
		let subeBaja = function(){
			//este efecto es el mismo que en la function "efecto"
			$h3primero.slideUp(null,function(){
				$(this).slideDown();
			});

			/*let efecto= function(selector){
				$(selector).slideUp(null,function(){
				$(this).slideDown();
			});
			}*/
		}
		let desaparecer = function(){
			//callback?
			$('ul:first').hide(450,function(){
				$(this).show(450);
			});
		} 
		let efecto = function() {
			$('ul:last').slideUp(null,function(){
				$(this).slideDown();
			});
		}
		let ancho= function() {
			//callback?
			$('.domtree').children('p:first').animate({'width': '0'}, 1000, function(){ $(this).hide().css('width','100%').slideDown()
	});
		}
		let verde = function() {
			$('select:last').children('option:selected').css('backgroundColor', '#01DF01');
		}
		let highlight= function(){
			$('code').addClass('highlight');
		} 

		//Al h3 de bienvenida:
		//	a.i. Añádele el atributo “id”. Ponle tu primer apellido
		//	a.ii. Aplícale un efecto CUALQUIERA al cargarse la página. Al finalizar el efecto debe volver a su estado normal.
		//	a.iii. Asocia el mismo efecto al realizar un clic sobre el mismo párrafo.*/
		$h3izquierda.attr('id', 'gomez').click(h3Efecto).click();
		

		//Cambia nombre Apellido1 Apellid2 por el tuyo
		$h1.text($h1.text().replace("Nombre Apellido1 Apellido2", nombre));
		//$h1.text($h1.text().substring(0, $h1.text().length=29 )+ nombre);
		//b. Añade tu nombre y dos apellidos a la texarea debajo del párrafo de bienvenida.
		$textArea.val(nombre);
	
		$btajax.click(ajaxF);
		$btArriba.click(subeBaja);
		$btdesaparecer.click(desaparecer);
		$btefectos.click(efecto);
		$bteancho.click(ancho);
		$btverde.click(verde);
		$bthighlight.click(highlight);

    	$h3primero.plugin();
    	$div.plugin({
	        color: "red",
	        height: "100%",
	        tamanio: "6em"
	    });

	});

	

		//Plugin
	jQuery.fn.plugin = function(opciones){

	    let defaults = $.extend({
	        color: "yellow",
	        height: "40%",
	        tamanio: "5em"
	    }, opciones); 

	    let heightActual = $(this).css("height");
	    let tamannoActual = $(this).css("fontSize");

	        this.each(function(){
	            
	            $(this).css({
	                backgroundColor: defaults.color
	            }).click(null, function(){
	                $(this).css({
	                    height: defaults.height,
	                    fontSize: defaults.tamanio
	                });
	            }).dblclick(null, function(){
	                $(this).css({
	                    height: 'initial',
	                    fontSize: 'initial'
	                });
	            })
	        });
	    return this;
	    }
	}


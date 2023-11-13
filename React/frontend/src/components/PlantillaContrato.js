import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Plantilla.css'
import moment from 'moment';

const Plantilla = () => {
    const { idContrato } = useParams();
    const [contrato, setContrato] = useState(null);
    const [clientes, setClientes] = useState([])
    const cliente = clientes.find((c) => c.idCliente === contrato.fkCliente);
    var localTime = moment().format('YYYY-MM-DD');

    const fetchClientes = () => {
		fetch('http://localhost:5000/cliente/')
			.then((response) => response.json())
			.then((clientesJson) => {
				console.log('Clientes obtenidos del servidor:', clientesJson);
				setClientes(clientesJson);
			})
			.catch((error) => {
				console.error('Error al obtener los clientes:', error);
			});
	};

   
        
    

    useEffect(() => {
        fetch(`http://localhost:5000/contrato/${idContrato}`)
            .then((response) => response.json())
            .then((contratoData) => {
                console.log("Contrato obtenido del servidor:", contratoData);
                setContrato(contratoData);
            })
            .catch((error) => {
                console.error("Error al obtener los detalles del contrato:", error);
            });

            fetchClientes()

    }, [idContrato]);

  return (
    <div className='bodyContrato'>
    <div className='container'>
      <h1>Contrato de Alquiler</h1>
      <p>
        Primero - Términos y Condiciones Generales de PATAGONIA EXPLORER S.R.L.
      </p>
      <ul>
        <li>
          <strong>1- Partes contratantes</strong>
          <ul>
            <li>
              1.1.- La locadora es la persona jurídica de derecho privado (en
              adelante denominada La locadora o PATAGONIA EXPLORER S.R.L),
              debidamente identificada en el encabezado del “Anexo I”. La
              Locadora opera la marca comercialmente registrada: “CHALTEN
              TRAVEL RENT A CAR”.
            </li>
            <li>
              1.2.- El locatario es la persona física, debidamente identificada
              en el del “Anexo I”, en adelante denominado Cliente, respondiendo
              por el integral cumplimiento y observación de este contrato.
            </li>
            <li>
              1.3.- El Conductor Autorizado es la persona física, indicada por
              el cliente, que también podrá conducir el vehículo alquilado,
              siendo parte contratante pero no poseyendo los poderes para
              alterar cualquier condición o término del presente contrato.
            </li>
            <li>
              1.4.- El Cliente y el Conductor Autorizado deberán tener más de
              21 (veintiún) años, y poseer licencia de conducir vigente con
              más de 2 (dos) años, encontrándose plenamente aptos para conducir
              el vehículo alquilado, en conformidad con las exigencias de la
              legislación de tránsito de la República Argentina.
            </li>
            <li>
              1.5.- El “Anexo I” es el documento que identifica en cada locación
              a los Contratantes, Conductores, al vehículo alquilado, al plazo
              de locación y a los precios acordados (tarifas y complementos de
              tarifa). Asimismo, especifica los valores y el alcance de
              protecciones adicionales, en caso de adhesión formal, anticipada y
              abonada la tasa correspondiente. El Anexo I es parte integrante
              de este Contrato.
            </li>
          </ul>
        </li>
        <li>
          <strong>Segundo - Objeto de este contrato</strong>
          <ul>
            <li>
              2.1.- Alquiler de vehículos de propiedad, posesión, uso o goce de
              la Locadora, por el Cliente, por plazo determinado, para la
              utilización exclusivamente en territorio de la República
              Argentina (salvo poder especial), observados los términos y
              límites de su utilización fijados a continuación y demás
              disposiciones del presente contrato.
            </li>
            <li>
              2.2.-El Automotor no podrá ser utilizado:
              <ul>
                <li>2.2.1.- En forma diferente o a fines distintos de los estipulados en el presente contrato.</li>
                <li>2.2.2.- En forma lucrativa. (Transporte oneroso de personas o bienes</li>
                <li>2.2.3.- Para arrastrar remolques y/o vehículos.</li>
                <li>2.2.4.- Sobrecargado con relación a su resistencia o capacidad.</li>
                  <li>2.2.5.- Para ser conducido en brechas o caminos no pavimentados o playas.</li>
                  <li>2.2.6.- Para ser conducido bajo la influencia de cualquier tipo de medicación -recetada o no- alcohol o sustancia que pudieren afectar su capacidad de manejo del Auto.</li>
                  <li>2.2.7.- Para participar, directa o indirectamente, en carreras o pruebas de seguridad, resistencia o velocidad.</li>
                  <li>2.2.8.- Para instrucción de personas no habilitadas para conducir.</li>
                  <li>2.2.9.- Para transportar explosivos, combustibles, materiales químicos inflamables y/o cualquier sustancia o cosa prohibida por las normas legales de la República Argentina.</li>
                  <li>2.2.10.- Para cualquier uso ilegítimo o bien del que emergiere responsabilidad civil y/o penal como resultado de la conducta del Cliente y/o el conductor autorizado en la utilización del automotor objeto de este convenio.</li>
                {/* ... Más elementos de la lista */}
              </ul>
            </li>
          </ul>
        </li>
        {/* Tercera sección */}
        <li>
            <strong>Tercero – Término</strong>
            <ul>
              <li>3.1.- El plazo forzoso de este contrato de locación está señalado en el “Anexo I”. El automotor alquilado deberá ser reintegrado a PATAGONIA EXPLORER SRL. en la fecha y hora registrada en el casillero denominado “Vencimiento” situado del “Anexo I”.</li>
              <li>3.2.- Cualquier pedido de prórroga deberá ser solicitado por el Cliente por escrito con una antelación de 12 (doce) horas, careciendo de validez cualquier comunicación telefónica al respecto.</li>
              <li>3.2.1.- La locadora deberá autorizar el pedido por el mismo medio y de acuerdo a su disponibilidad.</li>
              <li>3.2.2.- La falta de cumplimiento de lo anteriormente señalado otorgará el derecho a la locadora a promover las acciones penales pertinentes por apropiación indebida del rodado, sin necesidad de previa notificación. Configurada la apropiación indebida, el cliente quedará también sujeto a las sanciones penales y civiles que de ella deriven, cargando con todos los gastos judiciales o extrajudiciales que la Locadora realice para la búsqueda, aprehensión y efectivo reintegro del auto alquilado y de los demás daños y perjuicios ocasionados.</li>
            </ul>
          </li>
          <li>
            <strong>Cuarto – Precio</strong>
            <ul>
              {/* ... Otras secciones ... */}
              <li>
                4.1.1.- Diarias: La diaria de alquiler del automotor es de 24 (veinticuatro) horas, a partir de la hora de entrega del vehículo señalada en el Anexo I, con hasta 1(una) hora de tolerancia para la devolución.
              </li>
              <li>
                4.1.2.- Horas extras: Se cobrará a partir de la 24ª (vigésimo cuarta) hora, de la hora de entrega del automotor alquilado, cobrándose inclusive la hora de tolerancia. El valor de la Hora Extra es el indicado en el Anexo I. A partir de la 8ª (octava) hora posterior a la hora de devolución, se aplicará el valor de una diaria de locación de automotor, con base en la tarifa diaria contratada.
              </li>
              <li>
                4.1.3.- Kilómetros Extras: Serán cobrados solamente cuando fueran contratadas tarifas donde hubiera limitación de kilómetros o tarifas sin kilometraje incluido. El valor de los kilómetros extras será cobrado de acuerdo con los valores especificados en el Anexo.
              </li>
              <li>
                4.1.4.- Protección para cobertura de riesgos: La adhesión es obligatoria, conforme a la cláusula correspondiente. La diaria de la protección es válida por 24 (veinticuatro) horas. A partir de la 24ª (vigésima cuarta) hora incidirá la cobranza de una nueva diaria de la protección, en su valor total. Se expedirá una pre-autorización únicamente en tarjeta de crédito por un monto total de 120.000 pesos a modo de garantía para cubrir todos aquellos daños parciales que puedan ocurrirle al vehículo durante el alquiler y que no estan contemplados en la cobertura de la póliza de seguro.
              </li>
              <li>
                4.1.5.- Protección para conductor adicional: El Cliente tiene la obligación de denunciar ante la Locadora a toda persona que fuera a conducir el vehículo durante la vigencia del contrato de locación y presentar la correspondiente documentación habilitante para conducir. Para esta ampliación del número de conductores del rodado se debe contratar un seguro por cada día de uso de acuerdo con los valores especificados en el Anexo I, casillero “Conductor Adicional”. Rige lo expresado en la cláusula anterior respecto de la duración de la protección.
              </li>
              <li>
                4.1.6.- Protección para conductor menor de 25 años. El cliente deberá contratar la protección adicional para conductor menor de 25 años si, tanto él, como el conductor adicional tuvieran menos de 25 años de edad. Para esta ampliación de cobertura se debe contratar un seguro por cada día de uso de acuerdo a los valores especificados en el Anexo I, casillero “Conductor Menor de 25 años”. Rige lo expresado en la cláusula anterior respecto de la duración de la protección.
              </li>
              <li>
                4.1.7.- Tasa de Delivery. Es debida cuando el Cliente solicitara la entrega o la devolución del Automotor en un lugar diferente al domicilio de la agencia, debidamente identificado en el encabezado del Anexo I. Este servicio debe haber sido solicitado con al menos 48 horas de anticipación, será prestado solamente en los días y horarios que la locadora así lo disponga y tendrá un valor que aparece identificado en al Anexo I, casillero “Tasa de Delivery”.
              </li>
              <li>
                4.1.8.- Tasa de Combustible: El cliente deberá reintegrar el vehículo con la misma cantidad de litros de combustible a la registrada en la planilla del Anexo I. En caso contrario, el combustible faltante será cobrado de acuerdo al costo del litro de combustible especificado en el Anexo I “, casillero “Tasa de Combustible”. Asimismo, El Cliente deberá utilizar el combustible indicado por la Locadora.
              </li>
              <li>
                4.1.9.- Tasa de retorno: Es debida cuando el Automotor no fuera devuelto en la agencia de origen de locación. Se tomará para el cálculo la distancia del lugar de entrega y el de devolución. Será cobrada una tasa de retorno conforme con los importes descriptos en el Anexo I, casillero “Tasa de Retorno”.
              </li>
              <li>
                4.1.10.- Tasa de Lavado: el Automotor es entregado limpio. En caso de no ser restituido en las mismas condiciones, será cobrada una tasa de lavado conforme con los importes descritos en el Anexo I, casillero “Tasa de lavado”
                <p>
                  Lavado de vehículos: el vehículo es entregado limpio. En caso de que sea devuelto sucio interno y/o externamente sucio, será cobrada una tarifa (1)  igual a  un lavado simple o especial, dependiendo del estado del vehículo en la devolución.
                </p>
                <p>
                  Se cobrara una (1) tasa de lavado simple si dentro del vehículo se encuentran restos de comida o elementos usados de aseo personal.
                </p>
                <p>
                  Se cobrara una (1) tasa de lavado especial si se encuentran colillas de cigarrillos, tapizados manchados, restos de comida en tapizados, olor a cigarrillo u olores nauseabundos.
                </p>
                <p>
                  Tasa de lavado simple equivalente a 1/4 de la tarifa mostrador
                </p>
                <p>
                  Tasa de lavado especial equivalente a 1 día de tarifa mostrador.
                </p>
              </li>
              <li>
                c. Pérdida de los documentos del vehículo: será cobrado el valor de 1 (una) diaria de locación del vehículo utilizado, con base en la tarifa de mostrador vigente, aparte del reembolso de los gastos para la obtención de una nueva documentación del vehículo ante las autoridades de tránsito.
              </li>
              <li>
                d. Pérdida de las llaves del vehículo: será cobrado el valor de 4 (cuatro) diaria de locación del vehículo utilizado, con base en la tarifa de mostrador vigente, aparte del reembolso por los gastos para la confección de las llaves.
              </li>
              <li>4.1.11.- Tasa Fuera de Horario Comercial: Es debida cuando el Automotor es entregado o restituido fuera del horario de funcionamiento comercial de la agencia. Será cobrada la tasa conforme con el importe descrito en el Anexo I, casillero “Tasa Fuera de Hora”.</li>
              <li>4.1.12. -Adicionales: Toda vez que, junto con el Automotor, el cliente solicite la provisión de adicionales tales como GPS, Sillita de bebé, DVD portátil, teléfono celular, o cualquier otro que pudiera ser requerido, se cobrará el costo de provisión del adicional al valor identificado en el Anexo I, casilleros “Adicional 1, 2 o 3”. La provisión de dicho adicional solamente se hará en caso de solicitud realizada con al menos 48 horas de anticipación, y sujeta a disponibilidad de la locadora. Asimismo, se detallará en al Anexo I, casillero “Franquicia Adicional” el valor del bien entregado, cuyo pago será exigido por la locadora al cliente en caso de extravío, robo, hurto o rotura.</li>
              <li>4.1.13.-Pérdida de los documentos del Automotor: será cobrado el valor de 1(una) diaria de locación del vehículo utilizado, con base en la tarifa de mostrador- “Diaria con 200 Km libres”, aparte del reembolso de los gastos para la obtención de una nueva documentación del vehículo ante las autoridades de tránsito. El Cliente o el Conductor autorizado (según fuere el caso) deberán denunciar policialmente la pérdida de documentos del vehículo, en forma inmediata a la verificación de tal situación y simultáneamente remitir dicha denuncia policial a la Locadora.</li>
              <li>4.1.14. Pérdida de las llaves del vehículo: será cobrado el valor de 4 (cuatro) diaria de locación del vehículo utilizado, con base en la tarifa de mostrador vigente, aparte del reembolso por los gastos para la confección de las llaves.</li>
              <li>
  4.1.15.- No comparecencia del Cliente para el retiro del vehículo en la fecha y hora de la reserva. Para la reserva que no fuera cancelada con un anticipo mínimo de 6 (seis) horas del horario previsto para el retiro del vehículo, será cobrada 1 (una) diaria de locación del vehículo reservado, con base en la tarifa de mostrador “Diaria con 200 Km. libres”.
</li>
<li>
  4.1.16.- Infracciones de Tránsito: el Cliente deberá reembolsar a la Locadora el valor de la infracción incrementado en un 20 (veinte) % a título de procesamiento administrativo y gastos de gestoría.
</li>
<li>
  4.1.17.- Remolque o Acarreo del vehículo: El Cliente deberá reembolsar a la Locadora el valor abonado, incrementado en un 10 (diez) % a título de gastos administrativos. Asimismo, en caso de proceder, deberá abonar todos los gastos de servicios profesionales de abogados para la liberación del vehículo alquilado, aparte de las tasas cobradas por los órganos competentes.
</li>
<li>
  4.1.18.- Accesorios: será cobrado el valor integral de reposición del accesorio en casos de hurto, robo o daños. Los accesorios no se encuentran cubiertos por ningún tipo de seguro ni cobertura. Se considera accesorios a: equipo de audio, rueda de auxilio, cédula verde y documentación, matafuego, cricket y llave de rueda, antena, balizas, encendedor, alfombras, Airbag, traba-volante, botiquín de primeros auxilios, chaleco reflectivo, o cualquier otro que se indique en el Anexo I.
</li>
<li>
  4.1.19.- Costos Financieros por atraso en los pagos: El pago del contrato deberá estar íntegramente realizado al momento de la devolución del Automotor. La falta de pago en término de sus obligaciones y/o el desconocimiento de cargos efectuados en su tarjeta y que hubiere autorizado en el presente, permitirán a PATAGONIA EXPLORER S.R.L. reclamar lo adeudado con más un interés punitorio mensual adicional por mora, equivalente a dos veces la tasa activa del Banco de la Nación Argentina para operaciones de descuento, como así también, la totalidad de los gastos y costas, judiciales o extrajudiciales que se hubieren devengado como consecuencia de su incumplimiento.
</li>

<li>
  4.2. Aparte de los Ítems indicados precedentemente, forman parte para el cálculo del precio: Tasas y/o Impuestos Municipales, Provinciales o Nacionales, creados o a crearse, Indemnizaciones por Siniestros y/o Lucros Cesantes en casos de robo, hurto, incendio, accidente y/o apropiación indebida.
</li>
            </ul>
           
          </li>
          <li>
            <strong>Quinto - Obligaciones de PATAGONIA EXPLORER S.R.L.</strong>
            <ul>
              <li>
                5.1.- Entregar al cliente el vehículo limpio, abastecido de combustible, en perfectas condiciones de funcionamiento y seguridad y con todos los equipamientos y documentos exigidos por la ley.
              </li>
              <li>
                5.2.- Garantizar la reserva por el plazo de hasta una hora después del horario previsto para el retiro del automotor.
              </li>
              <li>
                5.3.- Garantizar la atención con el vehículo de la categoría reservada, o superior en caso de no poseer la categoría reservada al momento de la entrega. Las reservas no deben ser garantizadas por modelo del automóvil, sino por categoría.
              </li>
              <li>
                5.4.- En horario de funcionamiento comercial, sustituir el vehículo sin ningún costo para el Cliente en caso de falla por desperfecto electromecánico originado por el uso normal del vehículo.
                <ul>
                  <li>
                    5.4.1.- El Cliente debe comunicarse inmediatamente con la Locadora, quien detallará el proceder de acuerdo con cada caso.
                  </li>
                  <li>
                    5.4.2.- En caso de que el Cliente gestione el remolque por sus medios no será restituido el importe abonado.
                  </li>
                  <li>
                    5.4.3.- PATAGONIA EXPLORER S.R.L. se encuentra obligado a sustituir el vehículo por otro en buen estado cuando la causa del desperfecto no sea imputable al Cliente. La Locadora deberá reemplazar el vehículo, pudiendo sustituirlo por un vehículo igual, similar o de distintas características, de acuerdo con su disponibilidad y reservas.
                  </li>
                  <li>
                    5.4.4.- La locadora no está obligada a sustituir el vehículo en caso de hurto, robo, incendio, colisión, apropiación indebida, retención por las Autoridades competentes, pérdida de llaves, documentos, o fallas provocadas por el uso inadecuado del vehículo.
                  </li>
                </ul>
              </li>
              <li>
                5.5.- Efectuar por sí o por quien designe el mantenimiento y en horario comercial, la reparación mecánica que requiera el rodado.
              </li>
              <li>
                5.6.- Contratar un seguro que cubra responsabilidad civil según las normas vigentes.
              </li>
            </ul>
          </li>

        <div>
      <h2>Octavo – Rescisión:</h2>
      <p>
        8.1.- El presente contrato será considerado automáticamente rescindido por PATAGONIA EXPLORER S.R.L., sin que esto otorgue al Cliente cualquier derecho de retención o acción de naturaleza indemnizatoria, reparatoria, y/o compensatoria, cuando:
      </p>
      <ul>
        <li>8.1.1.- El vehículo no fuera devuelto en la fecha, hora y lugar previamente coordinadas en el Anexo I.</li>
        <li>8.1.2.- Se repare el vehículo sin previa autorización de la Locadora.</li>
        <li>8.1.3.- El cliente no cancele sus deudas en sus respectivos vencimientos.</li>
        <li>8.1.4.- Ocurriere cualquier siniestro independientemente de la cobertura contratada.</li>
      </ul>
      <p>8.2.- El contrato también se considerará rescindido en los casos de incumplimiento, de la Locadora, el Cliente, o conductor autorizado, de las obligaciones contractuales establecidas en este instrumento.</p>

      <h2>Noveno - Cláusulas Adicionales</h2>
      <p>9.1.- El Cliente acepta y autoriza a la Locadora, como condición para la celebración de la locación, reservar una garantía en su tarjeta de crédito, como mínimo igual a los gastos estimados previstos para la locación.</p>
      <p>9.2.- La Locadora no se responsabiliza por cualquier objeto o valores dejados u olvidados en el vehículo alquilado, como así también en sus dependencias.</p>

      <h2>Décimo - Domicilio y Jurisdicción.</h2>
      <p>10.1.- Las partes constituyen domicilio en los indicados en el Anexo I, y se someten a la jurisdicción de los tribunales ordinarios de CALAFATE, con renuncia expresa de cualquier otro.</p>

      <h2>Protección básica</h2>
      <p>Esta cobertura se encuentra incluida en la tarifa básica. El mismo incluye cobertura con franquicia a cargo de quien alquila el vehículo hasta el monto consignado en caso de daños por colisión, daños, robo, hurto y/o vuelco (ver cuadro de franquicias y garantías) según la categoría reservada.</p>

      <table>
        <thead>
          <tr>
            <th>Cat.</th>
            <th>Franquicia robo / daños</th>
            <th>Garantía en tarjeta de crédito</th>
            <th>Vuelco</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KWID</td>
            <td>$600,000.00</td>
            <td>$150,000.00</td>
            <td>$2,500,000 / u$s 6,000.00</td>
          </tr>
          <tr>
            <td>LOGAN</td>
            <td>$600,000.00</td>
            <td>$150,000.00</td>
            <td>$2,500,000 / u$s 6,000.00</td>
          </tr>
        </tbody>
      </table>

      <p>El titular del alquiler es responsable ante cualquier daño, robo, hurto, vuelco y/o faltante hasta dichos montos. Incluye seguro de responsabilidad civil indicado en la póliza.</p>

      <p>LAS GARANTÍAS Y FRANQUICIAS PODRÍAN ACTUALIZARSE AL MOMENTO DEL TOMA DEL VEHÍCULO SEGÚN LOS VALORES VIGENTES.</p>

      <p>He leído el frente y el reverso de este contrato. Acepto todas las condiciones que en los mismos se indican.</p>

     <p> <b>Fecha hoy:</b> {localTime}</p>
   <p>   <b>Fecha de entrega: </b>{contrato ? contrato.fechaAlquilado : ''}  /  <b>Fecha de devolución: </b>{contrato ? contrato.fechaDevolucion : ''}</p>
      
      <p><b>DNI: </b>{cliente ? cliente.dni : ''} <b>Aclaración: </b>{cliente ? cliente.nombreCompleto : ''} </p>
      <p>Firma: </p>

      <p>Patagonia Explorer</p>
    </div>
      </ul>
    </div>
    </div>
  );
};

export default Plantilla;

package app;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface bancoServer {
  
  @WebMethod string pegarBoleto (String codigoBarras);
  @WebMethod string criarBoleto (float valor, String cpfClient);
  @WebMethod boolean verificarPagamento (String codigoBarras);
  @WebMethod boolean cancelarBoleto (String codigoBarras);
}


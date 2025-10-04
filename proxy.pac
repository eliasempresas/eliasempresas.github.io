function FindProxyForURL(url, host) {
    // Se o host corresponder a um domínio específico, use o proxy SOCKS5
    if (shExpMatch(host, "*.eliasempresas.com")) {
        return "SOCKS5 proxy.eliasempresas.com:5555";
    }

    // Para todos os outros domínios, redirecionar para o proxy MTProto
    // Usando a porta 55555 para MTProto
    return "PROXY proxy.eliasempresas.com:55555";
}

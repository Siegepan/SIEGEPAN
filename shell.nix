# arquivo: node-env.nix
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs  # Inclui a versão padrão do Node.js
    pkgs.nodePackages.npm  # Inclui o npm
  ];

  # Defina variáveis de ambiente aqui, se necessário.
  NODE_ENV = "development";

  shellHook = ''
    echo "Ambiente configurado com Node.js e npm."
  '';
}

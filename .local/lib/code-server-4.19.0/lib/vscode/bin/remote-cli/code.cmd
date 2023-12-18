@echo off
setlocal
set ROOT_DIR=%~dp0..\..\..\..
set VSROOT_DIR=%~dp0..\..
call "%ROOT_DIR%\node.exe" "%VSROOT_DIR%\out\server-cli.js" "code-server" "1.84.2" "9658969084238651b6dde258e04f4abd9b14bfd1" "code-server.cmd" %*
endlocal

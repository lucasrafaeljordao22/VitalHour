# Variáveis (ajusta o caminho do Gradle, se for preciso)
[Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\a37825\AppData\Local\Android\Sdk", "User")
[Environment]::SetEnvironmentVariable("GRADLE_HOME", "C:\Users\a37825\Documents\gradle-9.8.2", "User")

# Acrescentar ao PATH do utilizador, sem duplicar nem cortar
$p = [Environment]::GetEnvironmentVariable("Path", "User")
$novos = @(
  "C:\Users\a37825\AppData\Local\Android\Sdk\platform-tools",
  "C:\Users\a37825\AppData\Local\Android\Sdk\cmdline-tools\latest\bin",
  "C:\Users\a37825\Documents\gradle-9.8.2\bin"
)
foreach ($n in $novos) { if ($p -notlike "*$n*") { $p += ";$n" } }
[Environment]::SetEnvironmentVariable("Path", $p, "User")
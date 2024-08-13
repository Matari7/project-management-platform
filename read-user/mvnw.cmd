@echo off
setlocal
SET MAVEN_VERSION=3.8.1
SET MAVEN_PROJECT_BASEDIR=%~dp0

REM Check if Java is installed
if not exist "%JAVA_HOME%\bin\java.exe" (
  echo "JAVA_HOME is not set or java.exe not found in JAVA_HOME."
  exit /b 1
)

REM Ensure Maven Wrapper jar is available
if not exist "%MAVEN_PROJECT_BASEDIR%.mvn\wrapper\maven-wrapper.jar" (
  echo "Downloading Maven Wrapper..."
  mkdir "%MAVEN_PROJECT_BASEDIR%.mvn\wrapper" 2>NUL
  curl -sSLo "%MAVEN_PROJECT_BASEDIR%.mvn\wrapper\maven-wrapper.jar" "https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.8.1/maven-wrapper-3.8.1.jar"
)

REM Execute Maven
"%JAVA_HOME%\bin\java" -jar "%MAVEN_PROJECT_BASEDIR%.mvn\wrapper\maven-wrapper.jar" %*
endlocal

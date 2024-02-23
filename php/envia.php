<?<php>
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);

    $para = "contato@lifeprestadora.com.br";
    $assunto = "Coleta de dados - Life Service"

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone."\n";

    $cabeca = "From: contato@lifeprestadora.com.br"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(email($para,$assunto,$corpo,$cabeca)){
        echo ("Enviado com sucesso!")
    }else{
        echo ("Erro ao enviar!")
    }
</php>
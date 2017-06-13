package com.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.test.pojo.Test;
import com.test.service.TestService;

@Controller
public class TestController {
	
	
	@RequestMapping("/index")
	public String index()
	{
		return "Frame";
	}
	
	@RequestMapping("/Main")
	public String main()
	{
		return "Main";
	}
	
	@RequestMapping("/input_info")
	public String inputInfo()
	{
		return "input_info";
	}
	
	@RequestMapping("/register")
	public String register()
	{
		return "register";
	}
	
	@RequestMapping("/login")
	public String login()
	{
		return "login";
	}
}

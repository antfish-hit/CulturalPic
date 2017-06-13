package com.test.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.test.dao.TestDao;
import com.test.pojo.Test;
import com.test.service.TestService;

@Service
public class TestServiceImpl implements TestService {
	
	@Autowired
	TestDao testDao;
	
	@Override
	public void save(Test test) {
		testDao.save(test);
	}

}
